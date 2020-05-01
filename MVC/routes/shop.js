const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const controller = require('../controllers/shop');

const router = express.Router();

router.get('/', controller.getIndex);
 router.get('/products',controller.getProducts);
router.get('/cart',controller.getCart);
router.get('/checkout',controller.checkout);

module.exports = router;

