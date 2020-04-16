console.log('starting notes.js');

const fs = require('fs');

//creating a rusable function

var fetchNotes = () => {
    try{
        var readString = fs.readFileSync('notes-data.json');
        return JSON.parse(readString);
        }
    //catching the error
        catch(e){

            return [];
    
        }


};

var saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};



var addNote = (title,body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    //try catch block is really important if no file exists at the beginning you won't be able to
    //read anything and the program will crash so to prevent the program you simply need to put the read code inside of the try block

  //if the notes already exists
    var duplicateNotes = notes.filter((note) => {
            return note.title === title;
    }); 

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
       

    }
};

    
    


var getAll = () => {
    console.log('getting all notes');

};
var getNote = (title) =>{

    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => {
        return note.title === title;

    });
    return filterNotes[0];
};

var removeNote = (title) => {

 var notes = fetchNotes();
 var filterNote = notes.filter((note) => {

    note.title !== title;

 });
 saveNotes(filterNote);

};

module.exports = {

    addNote,
    getAll,
    getNote,
    removeNote
};
