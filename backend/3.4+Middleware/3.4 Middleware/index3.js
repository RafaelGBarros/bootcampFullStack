import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){ // Assinatura da funcao "Logger", atencao ao "next"
  console.log("Request Method: ", req.method) // um middleware tem acesso aos objetos req e res
  next() // Libera o fluxo de codigo ao final do middleware
} 

app.use(logger); // Define o middleware, que por sua vez, exectua a func "logger"

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
