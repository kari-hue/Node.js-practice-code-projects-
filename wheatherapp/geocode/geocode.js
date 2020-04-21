

const request = require('request');

var geocodeAddress = (q) => {

 var encodedAddress = encodeURIComponent(q);

request({
    url :`https://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&appid=16d2fddbf87288b88787b57f8a7bd366`,
    json:true
},(error,response,body) =>{

    if(error)
    {
        console.log("Unable to connect with teh weather map");
    }
    else if(body.status === 'ZERO_RESULTS'){

        console.log('unable to find the address');
    }
    
    console.log(`Printing the longitude  : ${body.coord.lon}`);


    console.log(`Printing the latitude : ${body.coord.lat}`);

    
    }

   
);
}

module.exports.geocodeAddress = geocodeAddress;
    