const express = require('express');
const parser = require('body-parser');
const path = require('path');
const showroutes = require('./jsfiles/show');

const app = express();
const port = 3000;





app.use(showroutes);

app.listen(port);


