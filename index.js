const express = require('express');
const { connecter } = require('./Db/connect');
const app = express();

app.get("/",(req,res)=>{
    console.log("salama jiaby!!")
});




connecter("mongodb://127.0.0.1:27017/",(erreur)=>{
    if(erreur){
        console.log("erreur acces bdd");
        process.exit(-1);
    }else{
        app.listen(3000);
        console.log("Attente des requetes 3000")
    }
});