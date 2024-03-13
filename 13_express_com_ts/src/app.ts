// 1 - iniciando projeto
//console.log("Express + TS.");

//2 - init express
import express from 'express';

const app = express();

// usar para receber ou enviar algo
app.get("/", (req, res) => {
    return res.send("Hello Express!")
})

// escolhendo a porta quando ele for executado, e quando for executado exibir uma mensagem 
app.listen(3000, () => {
    console.log("Aplicação funcionado")
})