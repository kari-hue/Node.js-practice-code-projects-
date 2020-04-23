
const express = require('express');
//const parser = require('body-parser');
const path = require('path');
const router = express.Router();


router.use('/addproducts',(req,res,)=>{


    res.sendFile(path.join(__dirname,'../','hello','index.html'));
});


module.exports = router;