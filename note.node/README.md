# April 12/2020

Basic Basic Modules in node js

```javascript
require() //require is a function  available to you in any of the nodejs file 
```
>fs module(file system module)

```javascript

const fs = require("fs"); //It requires everything in the modules
```


```javascript
fs.appendFile("filename","text")
```
//appendFile is the method in fs

or

//you can do it the other way adding a call back function

```javascript
fs.appendfile("filename","text",function(err){
    if (err){
        console.log("There is an error");
    }
});
```

### Node package Manager

Type this command to initialize npm 
```javascript
npm init
```

> nodemon module

This module is responsible for starting the app when the changes occure

```javascript
npm install nodemon -g
```
//the terminal with start automatically it will save a lot of time and ton of errors

//install nodemon globally not only locally

> yargs module(Makes parsing lot more easier)

```javascript
npm install yargs@4.7.1 --save
```
```javascript
yargs.argv //is the library where yargs stores all it's version of argument  
```
