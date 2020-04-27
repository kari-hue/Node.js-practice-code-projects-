//index.js 

//required external modules

const express = require('express');
const path = require('path');


//app variables

const app = express();
const port = process.env.port || 3000;


//app configuration
app.set("views",path.join(__dirname,"views"));
app.set('view engine',"pug");
app.use(express.static(path_join(__dirname,"public")));

//routes defination

app.get('/',(req,res) => {

    res.render("index",{title : "Homepage"});
});

//server Activation

app.listen(port,()=>{
    console.log("Listening to the port");
});


