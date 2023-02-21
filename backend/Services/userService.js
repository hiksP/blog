const CreatedUserError = require("../errors/CreatedUserError");
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const mailService = require("./mailService");
const tokenService = require("./tokenService");
const UserDto = require("../dtos/userDto");

class UserService {
  async registeration(email, password, name) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw new CreatedUserError("Пользователь с таким email уже существует");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuidv4();
    const user = await User.create({ email, password: hashPassword, name });
    // await mailService.sendActivationMail(email, activationLink);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      userDto,
    };
  }
}

module.exports = new UserService();
