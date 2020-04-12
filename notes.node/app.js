

console.log('hello world');
const fs = require('fs');
const notes = require('./notes.js');

fs.appendFileSync('greeting.txt',`hellyou are ${notes.sayhello(4,5)}`);
