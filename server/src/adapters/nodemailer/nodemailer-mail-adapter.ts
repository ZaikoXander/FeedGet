import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b193d03e25afb4",
    pass: "4c5d1b9d779c35"
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
