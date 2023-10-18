const mongoose=require("mongoose")

const users=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    LastName:{type:String,required:true},
    FirstName:{type:String,required:true},
    PhoneNumber:{type:String,required:true},
    Role:{type:String,enum:["user","admin"],default:"user"}
})
module.exports=mongoose.model("users",users)