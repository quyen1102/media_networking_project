const mongoose = require('mongoose')



const Schema = mongoose.Schema
const postId = Schema.ObjectId

const Post = new Schema({
    postID: postId,
    photo: String,
    date: { type: Date, default: Date.now},
    userID: {type: String},
    likes: {type: Number, default: 0},
    comments: {type: Number, default: 'hihihi'},
    status: {type: String, default: 'no status'}
},{
    timestamps: true,
})


const PostModel = mongoose.model('Post', Post)




module.exports = mongoose.model('Post', Post)

