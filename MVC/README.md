# Model control view

Model-View-Controller (or MVC) is probably one of the most popular architectures for applications. 

We can describe the MVC architecture in simple terms:

* Model: the part of our application that will deal with the database or any data-related functionality.

* View: everything the user will see — basically, the pages that we’re going to send to the client.

* Controller: the logic of our site, and the glue between models and views. Here we call our models to get the data, then we put that data on our views to be sent to the users.

## In this particular application we have divided MVC as

* Views folder contains Dynamic view of our application . Basically uses ejs file.
  
we have ```sh includes ``` folder that folder basically contains the layout section head,body, and navigation.

Then, ```sh 404.ejs ``` ,```add-product.ejs```,```shop.ejs``` they include the layout files in as

```ejs
<%- include includes/head.ejs %>
```

