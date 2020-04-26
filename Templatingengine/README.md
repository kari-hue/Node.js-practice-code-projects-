 
 
 > Go to the link below to know more about handler.js
 ```javascript
 https://handlebarsjs.com/guide/#what-is-handlebars
 ```

 > Install handlebars in your app.

 ```javascript 
 npm install express-handlebars
 
 ```
 >usig or requiring it in your program

 ```javascript
const hbs = require('express-handlebars')

app.engine('hbs',hbs({extname: 'hbs',defaultLayout:'layout',layoutsDir:__dirname + '/views'/'layout'}))
app.set('view engine','hbs');
```
