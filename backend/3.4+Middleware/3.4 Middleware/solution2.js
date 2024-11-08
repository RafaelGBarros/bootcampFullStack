import express from "express";
import morgan from "morgan"; // testando o morgan middleware

const app = express();
const port = 3000;

app.use(morgan("tiny")); // midlleware montado com morgam module

app.get("/", (req, res) => {
  console.log(req.body)
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
