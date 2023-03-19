const mailService = require("../Services/mailService.js");

exports.contactMe = async (req, res, next) => {
  try {
    const { text, name, mail } = req.body;
    await mailService.sendMail(text, name, mail);
    res.json(200).message("Сообщение успешно отправлено!");
  } catch (e) {
    next(e);
  }
};
