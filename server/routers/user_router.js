const router=require("express").Router()
const userControler=require("../controllers/user_controller")
const { auth } = require("../middleware/auth")
const {loginValidation,registerValidation,validation}=require("../middleware/validator")

router.post("/api/createUser",registerValidation,validation,userControler.create_user)
router.post("/api/login",loginValidation,validation,userControler.login)
router.get("/api/getCurrent",auth,(req,res)=>{
    res.send({user:req.user})
})

module.exports={user_router:router}