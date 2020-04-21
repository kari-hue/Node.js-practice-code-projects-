

const request = require('request');

var geocodeAddress = (q,callback) => {

 var encodedAddress = encodeURIComponent(q);

request({
    url :`https://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&appid=16d2fddbf87288b88787b57f8a7bd366`,
    json:true
},(error,response,body) =>{

    if(error)
    {
        callback("Unable to connect with teh weather map");
    }
    else if(body.status === 'ZERO_RESULTS'){

        callback('unable to find the address');
    }
    callback(undefined ,{
        Longitude : body.coord.lon,
        Latitude : body.coord.lat
    });
});
}


   



module.exports.geocodeAddress = geocodeAddress;
    