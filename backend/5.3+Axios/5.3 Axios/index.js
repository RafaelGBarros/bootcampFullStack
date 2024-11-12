import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
    console.log(result)
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  
  try{
    console.log(req.body);

    const type = req.body.type
    const participants = req.body.participants
    
    console.log(participants)

  const response = await axios.get(
    `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`)
  console.log(response)

  const result = response.data

  res.render("index.ejs",{
    data: result[Math.floor(Math.random() * result.length)]
  })

  }catch(error){
    console.log("Falha ao fazer a requisicao: ", error.message)

    res.render("solution.ejs", {
      error: "Nenhuma atividade para estes criterios",
    })
  }




});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
