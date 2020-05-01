
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/listproducts', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  };


exports.getIndex = (req,res,next) =>{

    Product.fetchAll(products => {
        res.render('shop/index', {
          prods: products,
          pageTitle: 'Shop',
          path: '/',
          
        });

    
})
}

exports.getCart = (req,res,next) => {

    res.render('shop/cart',{
        path : '/cart',
        pageTitle: 'cart view'

    });

}

exports.checkout = (req,res,next) => {

    res.render('shop/checkout' ,{

        path:'/checkout',
        pageTitle: 'Here you will have the title page'


    });
}