import express from "express"

const app = express()

// GET, POST, PUT, PATCH, DELETE

// GET = Buscas informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação

app.post("/feedbacks", (req, res) => {
  return res.send("Hello World")
})

app.listen(3333, () => {
  console.log("HTTP server running!")
})
