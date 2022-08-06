import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter"
import dotenv from "dotenv"

dotenv.config()

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASS
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Zaiko Xander <alexdaniel.lima.a@gmail.com>",
      subject,
      html: body
  })
  }
}
