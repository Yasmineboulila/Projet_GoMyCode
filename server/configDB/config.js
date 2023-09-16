const mongoose=require("mongoose")

const connecting=async()=>{
    try {
        mongoose.connect("mongodb+srv://boulilayb:01230123@cluster160923.y8tmyet.mongodb.net/")
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
   
}
module.exports=connecting