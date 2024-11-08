import express from "express"

const app = express()
const port = 3000

app.get("/", (req,res)=>{
    res.send("Servidor rodando com noedmon (modo dev)")
})


app.get("/About", (req,res)=>{
    res.send("Sobre mim")
})


app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
})