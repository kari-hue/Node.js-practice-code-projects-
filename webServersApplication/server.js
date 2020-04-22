const express = require('express');


var app = express(); 

const port = 3000;

//setting up HTTP routes

app.get('/bad',(req,res) =>{

    res.send('Bad data detected');
})

app.listen(port,() => {
console.log(port);
}
)
