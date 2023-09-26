const router=require("express").Router()
const mail=require("../controllers/send_email")

router.post("/api/mail", mail.sendmail)

module.exports={email_router:router}