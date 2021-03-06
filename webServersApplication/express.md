# All you need to know about express library

### It is a no nonsense library.

> Installing express

```javascript 
$ npm install express --save
```

> Using expres in your application(require it first)

```javascript
const express = require('express');
```
var app = express(); 
// creating a port at 3000
const port = 3000;

> setting up HTTP routes
```javascript
app.get('/',(req,res) =>{

    res.send('Hello world');
})

app.listen(port,() => {
console.log(port);
}
)
//port value consists of the port number you want your app to work in
```
### Serving static files in express

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:
```javascript
express.static(root, [options])

```
> using it in your program

```javascript
app.use(express.static(__dirname + '/hello'));
```
or do it the other way using path
```javascript
const path = require('path'); //require to use path

//now using it in your program
res.sendFile(path.join(__dirname,'../','directory name','filename')); // ../ means come out of the working directory
```
Bonus tip: ``` __dirname```  stores the path of your directory

# handlebar.js

* Handlebars is a simple templating language.

* It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.

```html

<p>{{firstname}} {{lastname}}</p>
```

# hbs

Express.js view engine for handlebars.js

install

```javascript
npm install hbs
```
Using partials:

```javascript

hbs.registerPartials(__dirname + 'specify path')

```

 # Express Middleware

 ```javascript
 app.use ((req,res,next) =>{

     //next tells your express when your middleware is done
     //until you call next() nothing is going to run

 }
 ```

 ## Some build in function to use

 * sendFile
 * redirect()
  

 Note: if status === 200 {console.log("everything is fine");} else if (staus === 404){console.log("There is a problem");}

 > express.Router Use the express.Router class to create modular, mountable route handlers.

 ```javascript
 const router = express.Router();
 ```
