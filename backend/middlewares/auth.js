const WrongAuthError = require("../errors/WrongAuthError");
const tokenService = require("../Services/tokenService");

module.exports = function (req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(new WrongAuthError("Нет доступа"));
    }
    const accessToken = authHeader.split(" ")[1];
    if (!accessToken) {
      return next(new WrongAuthError("Нет доступа"));
    }
    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(new WrongAuthError("Нет доступа"));
    }
    req.user = userData;
    next();
  } catch (e) {
    return next(new WrongAuthError("Нет доступа"));
  }
};
