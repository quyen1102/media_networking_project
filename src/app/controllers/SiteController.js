const User = require('../models/User')
const Post = require('../models/Post')
const {  multipleObjMoongose , objMongoose } = require('../../util/mongoose')

class SiteController {
    index(req , res , next) {
        User.find({})
            .then(user => {
                // res.json(user)
                res.render('home', { 
                    user: multipleObjMoongose(user)
                })
            })
            .catch(next)
    }
    showPost(req , res , next) {
        Post.find({})
            .then(post => {
                res.render('home', {
                    post : multipleObjMoongose(post)
                })
            })
            .catch(next)
    }
}

module.exports = new SiteController