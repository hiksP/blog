const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: "blogtestovich@mail.ru",
      to,
      subject: "Активация аккаунта на " + process.env.API_URL,
      text: "",
      html: `
        <div>
          <h1>Для активации перейдите по сcылке</h1>
          <a href="${link}">${link}</a>
        </div>
      `,
    });
  }
}

module.exports = new MailService();
