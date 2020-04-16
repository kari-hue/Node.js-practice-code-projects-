

console.log('hello world');
const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs');

//to access the argument you got to use process object

// console.log(process.argv);

//short form for argument v
//let's use yarg.argv

const argv = yargs.argv;

var command = process.argv[2];

console.log('command',command);


console.log('process',process.argv);
console.log('Yargs',argv);


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
}

else if(command == 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log("Okay we found the node");
        console.log(`title:${note.title}`);
        console.log(`body:${note.body}`);

    }
    else
    {
        console.log("Node not found");
    }
}

else if(command == 'remove'){
   var noteRemove = notes.removeNote(argv.title);
   var message = noteRemove ? 'note was removed' : 'text node not found';
   console.log(message);
  
}



else
console.log("sorry no commands found");