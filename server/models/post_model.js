const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    title:String,
    image:String,
    prix:Number
})

module.exports = mongoose.model("Post", Post)