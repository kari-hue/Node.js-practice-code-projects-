

const express = require('express');
const app = express();

const path = require("path");
//const router = express.Router();
const port = 3000;

// app.use((res,req) => {

//     res.sendFile(path.join(__dirname,'htmlcontent','pagenotfound.html'));
//     res.redirect('/');
    
// });

app.get('/users',(req,res) =>{

    // app.setTimeout(() => {

        res.sendFile(path.join(__dirname,'/','htmlcontent','pagefound.html'));


        
    // }, 5000);
   


    // res.redirect('/');

});

app.get('/',(req,res) =>{

    res.send('<h1>Hello you are in the main page</h1>');

})

app.use((res,req,next)=>{

    res.status(404).sendFile(path.join(__dirname,'htmlcontent','pagenotfound.html'));

    

});



app.listen(port,()=>{

    console.log("Listening to port 3000");

});