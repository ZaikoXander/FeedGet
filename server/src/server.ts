import express from "express"
import nodemailer from "nodemailer"
import { prisma } from "./prisma"

const app = express()

// GET, POST, PUT, PATCH, DELETE

// GET = Buscas informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação

app.use(express.json())

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b193d03e25afb4",
    pass: "4c5d1b9d779c35"
  }
})

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Zaiko Xander <alexdaniel.lima.a@gmail.com>",
    subject: "Novo feedback",
    html: [
      "<div style='font-family: sans-serif; font-size: 16px; color: #111'>",
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      "</div>"
    ].join("\n")
  })

  // status http, 201 = sinaliza que algo foi criado
  return res.status(201).json({ data: feedback })
})

app.listen(3333, () => {
  console.log("HTTP server running!")
})
