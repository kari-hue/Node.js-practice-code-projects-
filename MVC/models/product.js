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
  constructor(t) {
    this.title = t;
  }

  save() {
    
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
};