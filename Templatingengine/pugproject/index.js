//index.js 

//required external modules

const express = require('express');
const path = require('path');


//app variables

const app = express();
const port = process.env.port || 3000;


//app configuration

//routes defination

app.get('/',(req,res) => {

    res.status(200).send("Inventory Management");
});

//server Activation

app.listen(port,()=>{
    console.log("Listening to the port");
});


