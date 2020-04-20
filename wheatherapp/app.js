const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    a:{
        demand:true,
        address:'address',
        describe: 'This gives the address',
        string: true
    }

})
.help()
.alias('help','h')
.argv;
console.log(argv);


//lets get the encoded address
var encodedAddress = encodeURIComponent(argv.address);

request({
    url :`https://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&appid=16d2fddbf87288b88787b57f8a7bd366`,
    json:true
},(err,response,body) =>{

   
   
    console.log(`Printing the longitude and latitude : ${body.coord.lon}`);




});