const express = require('express');

const app = express();

const port = 3000;

app.use('/addproducts',(req,res,)=>{


    res.send('<form action ="/product" method = "POST" > <input type = "text" name = "name"><button>Click</button>');


});

app.use('/product',(req,res) =>{

    res.redirect('/');

});

app.use('/',(req,res,next)=>{
    console.log("here I sm");

    next();
})

app.listen(port,() =>{

    console.log("listening to the port");
})