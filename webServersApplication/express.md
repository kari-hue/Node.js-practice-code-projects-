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
```

