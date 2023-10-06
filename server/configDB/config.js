const mongoose=require("mongoose")

const connecting=async()=>{
    try {
        mongoose.connect("mongodb+srv://boulilayas2002:NJC1Dvg1zgnjTImg@cluster0.1qck6et.mongodb.net/?retryWrites=true&w=majority")
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
   
}
module.exports=connecting