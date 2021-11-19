const Product = require('../models/Product')

class ProductController {
    show(req, res, next) {
        Product.find({})
        .then(product =>{
            res.json(product)
        })
        .catch(next)
    }
}

module.exports = new ProductController // us class thì phải thêm new