const request = require('request');

request({
    url :'https://api.openweathermap.org/data/2.5/weather?q=Nepal&appid=16d2fddbf87288b88787b57f8a7bd366',
    json:true
},(err,response,body) =>{

    console.log(body);


});