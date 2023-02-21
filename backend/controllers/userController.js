const userService = require("../Services/userService");

exports.registration = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const userData = await userService.registeration(email, password, name);
    console.log(userData);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    if (e.statusCode === 409) {
      res.json(e.message);
    } else {
      res.json(e);
    }
  }
};
exports.login = async (req, res, next) => {
  try {
  } catch (e) {}
};
exports.logout = async (req, res, next) => {
  try {
  } catch (e) {}
};
exports.activate = async (req, res, next) => {
  try {
  } catch (e) {}
};
exports.refresh = async (req, res, next) => {
  try {
  } catch (e) {}
};
exports.getMe = async (req, res, next) => {
  try {
  } catch (e) {}
};

exports.updateMe = async (req, res, next) => {
  try {
  } catch (e) {}
};
