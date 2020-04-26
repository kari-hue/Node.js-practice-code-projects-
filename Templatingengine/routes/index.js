const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{

    res.render('index',{title :'Hello hun', consition: false});
})

module.exports = router;