const CreatedUserError = require("../errors/CreatedUserError");
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const milService = require("./mailService");
const mailService = require("./mailService");

class UserService {
  async registeration(email, password, name) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw new CreatedUserError("Пользователь с таким email уже существует");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuidv4();
    const user = await User.create({ email, password: hashPassword, name });
    await mailService.sendActivationMail(email, activationLink);
  }
}

module.exports = new UserService();
