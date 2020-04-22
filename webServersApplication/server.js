const express = require('express');
const hbs = require('hbs');


var app = express();
app.set('view engine','hbs');

app.use(express.static(__dirname + '/hello')); //It stores the path of your directory

const port = 3000;

//setting up HTTP routes

app.get('/bad',(req,res) =>{

    res.send('Bad data detected');
})

app.get('/about',(req,res)=> {

    res.render('about.hbs',{
    pageTitle:'Tell me about yourself',
    Interests: 'In this beautiful day'
});
})

app.listen(port,() => {
console.log(port);
}

)

//you can also use app.listen(3000) it takes a second argument it's a function
