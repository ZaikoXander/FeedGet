import express from "express"
import cors from "cors"
import { routes } from "./routes"

const app = express()

// GET, POST, PUT, PATCH, DELETE

// GET = Buscas informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação

app.use(cors(/* {
  origin: "http://localhost:3000"
} */))
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log("HTTP server running!")
})
