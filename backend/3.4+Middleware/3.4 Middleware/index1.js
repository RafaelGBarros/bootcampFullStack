import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { getSystemErrorName } from "util";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended:true }))

function badName(st,pt){
  return st+pt
}

app.post("/submit", (req,res)=>{
  console.log(badName(stName, ptName))
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
