// creating an object

// var anything = {
//     name :"karishma",
//     sge:25
// }

// var where = JSON.stringify(anything);
// console.log(where);


const fs = require('fs');
var newfile = {name:"andrew",age:35};
// console.log(typeof newfile);
var where = JSON.stringify(newfile);
fs.writeFileSync('first.json',where);

var notestring = fs.readFileSync('first.json');
var note = JSON.parse(notestring);
console.log(typeof note);
console.log(note);
// var parsing = JSON.parse(newfile);

// console.log(parsing);