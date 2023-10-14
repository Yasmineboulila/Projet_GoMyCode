const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    title:String,
    image:String,
    description:String,
    prix:Number,
    category:String,
    pet:String
})

module.exports = mongoose.model("Post", Post)