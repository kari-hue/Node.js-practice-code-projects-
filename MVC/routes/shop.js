const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const controller = require('../contoller/product');

const router = express.Router();

router.get('/', controller.getProducts);

module.exports = router;

