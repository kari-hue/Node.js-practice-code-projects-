//we will define a product properties in here
//require filesystem
const fs = require('fs');
const path = require('path');
const products = [];

module.exports = class Product{

    constructor(title){

        this.title = title;
    }
    save(){

        const pat = path.join(path.dirname(process.mainModule.filename),
        
        'data',
        'products.json'
        );
        fs.readFileSync(pat,(err,fileContent) =>{

            let products = [];
            if(!err){
                products = JSON.parse(fileContent);

            }

            products.push(this);
            fs.writeFile(pat,JSON.stringify(products),(err) => {
                console.log(err);
            });

        });
    
    }

    static fetchAll(){
        
        fs.readFileSync(pat, (err,fileContent) => {
            if (err) {
                return[];
            }
            return JSON.parse(fileContent);

        })
        return products;


    }
}