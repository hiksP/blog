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

  async sendMail(text, name, email) {
    await this.transporter.sendMail({
      from: "blogtestovich@mail.ru",
      to: "qksyo@yandex.ru",
      subject: "Очень важное письмо с блога!)",
      text: `Это письмот от ${name}. Email для связи ${email}. Его сообщение: ${text}`,
    });
  }
}

module.exports = new MailService();
