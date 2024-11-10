import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url)); // extrair diretorio apartir da url de aruivo atual

const app = express();
const port = 3000;
var bandName = "" // variavel de escopo global usada para armazenar o nome gerado

app.use(bodyParser.urlencoded({ extended:true })) // Utilizando bodyParse e urlencoded para captar os dados 

//declara middleware
function bandNameGen(req, res, next){ //middleware responsavel por usar os dados e gerar o nome da banda
  bandName = req.body.street + " " +req.body.pet
  next()
}

//instacia o middleware
app.use(bandNameGen)


app.post("/submit", (req, res)=>{
  console.log(req.body)

  res.send(`<h1>Your Band Name: <h1> ${bandName}`)
}) //retorna a logica acima num res.send par a rota post /submit



app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html") // Quando acessado o servidor, envia a pagina/arquivo "index.html" para o solicitante
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
