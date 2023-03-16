const userService = require("../Services/userService");
const CreatedUserError = require("../errors/CreatedUserError");
const { validationResult } = require("express-validator");
const WrongReqErorr = require("../errors/WrongReqError");

exports.registration = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new WrongReqErorr("Ошибка при валидации"));
    }
    const { email, password, name } = req.body;
    const userData = await userService.registeration(email, password, name);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    if (e.statusCode === 409) {
      next(new CreatedUserError("Пользователь с таким email уже существует"));
    } else {
      next(e);
    }
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await userService.login(email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    await userService.logout(refreshToken);
    res.clearCookie("refreshToken");
    return res.status(200).json("Вы вышли");
  } catch (e) {
    next(e);
  }
};

exports.activate = async (req, res, next) => {
  try {
    const link = req.params.link;
    await userService.activate(link);
    return res.redirect(process.env.CLIENT_URL);
  } catch (e) {
    next(e);
  }
};

exports.refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = await userService.refresh(refreshToken);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = await userService.getMe(refreshToken);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData.user);
  } catch (e) {
    next(e);
  }
};

exports.updateMe = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const { refreshToken } = req.cookies;
    const userData = await userService.updateMe(refreshToken, name, email);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData.user);
  } catch (e) {
    if (e.name === "ValidationError" || e.name === "CastError") {
      next(new WrongReqErorr("Переданы некорректные данные"));
    } else if (e.codeName === "DuplicateKey") {
      next(new CreatedUserError("Пользователь с такими данными уже есть"));
    }
    next(e);
  }
};

exports.updateAvatar = async (req, res, next) => {
  try {
    const { avatar } = req.body;
    const { refreshToken } = req.cookies;
    const userData = await userService.updateAvatar(refreshToken, avatar);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData.user);
  } catch (e) {
    if (e.name === "ValidationError" || e.name === "CastError") {
      next(new WrongReqErorr("Переданы некорректные данные"));
    } else {
      next(e);
    }
  }
};
