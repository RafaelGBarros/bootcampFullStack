import express from "express"
const app = express()
const port = 3000

const data = new Date()
const dia = data.getDay()


function msgGenerator(){
    let msg = ""

    if (dia < 1 || dia > 5){
        msg = "Its Weekend! time to fun!"
    }else{
        msg = "Its Weeekday! its time to work!"
    }

    return msg
}

app.get("/", (req,res)=>{
    res.render("index.ejs", {msg : msgGenerator()})
})

app.listen(port, ()=>{
    console.log(`ouvindo na porta ${port}`)
})