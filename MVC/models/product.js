const fs = require('fs');
const path = require('path');

//using p function as a global function

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);



const getproductsFromFile = cb => {
  // const p = path.join(
  //   path.dirname(process.mainModule.filename),
  //   'data',
  //   'products.json'
  // );
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    }
    cb(JSON.parse(fileContent));
  });
}

  


module.exports = class Product {
  constructor(title,imageUrl,price,genre) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.genre = genre;
  }

  save() {
    //to create a unique ID for all the objects
    this.id = Math.random().toString();
    
    getproductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);

    });
  })
    
   
  }

  static fetchAll(cb) {
    getproductsFromFile(cb);
    
}
static findById(id,cb){
  getproductsFromFile(products => {
    const product = products.find(p => p.id === id);
    cb(product);
  });

}
};