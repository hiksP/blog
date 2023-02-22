const CreatedUserError = require("../errors/CreatedUserError");
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const mailService = require("./mailService");
const tokenService = require("./tokenService");
const UserDto = require("../dtos/userDto");
const NotFoundError = require("../errors/NotFoundError");
const WrongReqErorr = require("../errors/WrongReqError");
const WrongAuthError = require("../errors/WrongAuthError");

class UserService {
  async registeration(email, password, name) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw new CreatedUserError("Пользователь с таким email уже существует");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuidv4();
    const user = await User.create({ email, password: hashPassword, name });
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/activate/${activationLink}`
    );
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(link) {
    const user = await User.findOne({ link });
    if (!user) {
      throw new NotFoundError("Пользователь не найден");
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new WrongReqErorr("Пользователь не найден");
    }
    const isPassOk = await bcrypt.compare(password, user.password);
    if (!isPassOk) {
      throw new WrongReqErorr("Неверный пароль");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw new WrongAuthError("Вы не авторизованы");
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw new WrongAuthError("Вам необходимо войти");
    }
    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async getMe(token) {
    if (!token) {
      throw new WrongAuthError("Вы не авторизованы");
    }
    const userData = tokenService.validateRefreshToken(token);
    const user = await User.findById(userData.id);
    if (user == null) {
      throw new NotFoundError("Пользователь не найден");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async updateMe(token, name, email) {
    const userData = tokenService.validateRefreshToken(token);
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      {
        new: true,
        runValidators: true,
      }
    );
    if (err.name === "ValidationError" || err.name === "CastError") {
      next(new WrongReqError("Переданы некорректные данные"));
    } else if (err.codeName === "DuplicateKey") {
      next(new CreatedUserError("Пользователь с такими данными уже есть"));
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new UserService();
