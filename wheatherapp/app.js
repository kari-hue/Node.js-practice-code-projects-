const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');


const argv = yargs.options({
    a:{
        demand:true,
        alias:'q',
        describe: 'This gives the address',
        string: true
    }

})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.q);

//lets get the encoded address
// var encodedAddress = encodeURIComponent(argv.q);

// request({
//     url :`https://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&appid=16d2fddbf87288b88787b57f8a7bd366`,
//     json:true
// },(error,response,body) =>{

//     if(error)
//     {
//         console.log("Unable to connect with teh weather map");
//     }
//     else if(body.status === 'ZERO_RESULTS'){

//         console.log('unable to find the address');
//     }
    
//     console.log(`Printing the longitude  : ${body.coord.lon}`);


//     console.log(`Printing the latitude : ${body.coord.lat}`);

    
//     }

   
// );
    



