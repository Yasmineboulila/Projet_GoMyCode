const users=require("../models/user_model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

module.exports={
    create_user:(async(req,res)=>{      
          const {email,password}=req.body
    try {
        const found=await users.findOne({email})
        console.log('found', found)
        if (found){
            res.status(404).send({msg:"user exist"})
        }
        else {
            const {email, password, PhoneNumber, LastName,FirstName, Role} = req.body;
            const salt=10
            const hashPassword=await bcrypt.hash(password,salt)
            const oneUser=new users({email, password:hashPassword, PhoneNumber, LastName,FirstName, Role})
            // oneUser.password=hashPassword
            console.log('oneUser',oneUser)
            const data={id:oneUser._id}
            const token = jwt.sign(data, "jwtSecretKey")
            await oneUser.save()
            // console.log("result:", result)
            res.status(200).send({msg:"user created",user:oneUser,token:token})
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error)
    }

    }),
    login:(async(req,res)=>{
        const {email,password}=req.body
        try {
            const check=await users.findOne({email})
            if(!check){
                res.status(404).send({msg:"user doesn't exist"})
            }
            else {
                const compare=bcrypt.compareSync(password,check.password)
                if(!compare){
                    res.status(404).send({msg:"password wrong"})
                }
                else{
                    const payload={id:check._id}
                    const token= jwt.sign(payload, "jwtSecretKey")
                    res.status(200).send({msg:"login succes",user:check,token:token})
                }
            }
        } catch (error) {
            res.status(500).send(error)
            
            
        }
        
    }),
    get_one_user:async(req,res,id)=>{
        try {
            const user=await users.findById(id)
            res.status(200).send({msg:"user",user:user})
        } catch (error) {
            // res.status(500).send(error)
            
        }
    }
    
}
        