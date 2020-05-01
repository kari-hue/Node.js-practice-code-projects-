# Model control view

Model-View-Controller (or MVC) is probably one of the most popular architectures for applications. 

We can describe the MVC architecture in simple terms:

* Model: the part of our application that will deal with the database or any data-related functionality.

* View: everything the user will see — basically, the pages that we’re going to send to the client.

* Controller: the logic of our site, and the glue between models and views. Here we call our models to get the data, then we put that data on our views to be sent to the users.

## In this particular application we have divided MVC as

* Views folder contains Dynamic view of our application . Basically uses ejs file.
  
we have ``` includes ``` folder that folder basically contains the layout section head,body, and navigation.

Then, we have two directory ``` shop ```  ``` Admin ```  the ejs files in these directory control the view for the admin and the shop.


>  They include the layout files in as

```ejs
<%- include includes/head.ejs %>
```

It looks like this

![Screenshot](./public/capture1.PNG)


All the design has been dropped into css file that is within ``` public/css ```

* controllers (Basically the controllers) directory contains js files that controls the views, controls the routes everything.

> we have two js file in this project that are responsible for routing. They are present within ``` routes ``` folder. 

1. admin.js
2. shop.js

In ``` admin.js ``` we handle three routes and they are controlled by the ``` product.js ``` controller.

* we require the product.js file as ``` const productController = require('../controllers/products') ```
* Then for every routes we call the functions in product.js as ``` router.get('/add-product', productController.getAddProduct
); ```




