import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("combined")) // usando o middleware morgan com parametro "combined"

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req,res)=>{
  res.send("Hello Post")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
