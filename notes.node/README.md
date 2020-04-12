# April 12/2020

Basic Basic Modules in node js

```sh
require() //require is a function is available to you in any of the nodejs file 
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

> os module
>