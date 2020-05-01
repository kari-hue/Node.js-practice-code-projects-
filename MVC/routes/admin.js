const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const productController = require('../controllers/products');
const router = express.Router();

// const products = [];

// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct
);

router.get('/products',productController.getproduct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;
// exports.products = products;

