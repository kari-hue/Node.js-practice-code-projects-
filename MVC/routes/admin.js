const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const productContoller = require('../controller/product');
const router = express.Router();

// const products = [];

// /admin/add-product => GET
router.get('/add-product', productContoller.getaddProduct
);

// /admin/add-product => POST
router.post('/add-product', productContoller.postAddProduct);

module.exports = router;
// exports.products = products;
