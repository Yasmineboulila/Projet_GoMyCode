const mongoose=require("mongoose")

const connecting=async()=>{
    try {
        mongoose.connect("mongodb+srv://boulilayas2002:yas123@cluster0.1qck6et.mongodb.net/")
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
   
}
module.exports=connecting