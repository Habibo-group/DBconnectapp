const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    console.log("salama jiaby!!")
});

app.listen(3000);
console.log("Attente des requetes 3000")