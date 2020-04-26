const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const viewfile = require('./routes/index');
const port = 3000;
const app = express();

app.engine('hbs',hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname + '/views/layout/'}));
app.set('view engine','hbs');

app.use('/',viewfile);

app.listen(port);