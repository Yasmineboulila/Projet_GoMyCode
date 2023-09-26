const router=require("express").Router()
const sms=require("../controllers/send_sms")

router.post("/api/sendsms",sms.sendsms)

module.exports={sms_router:router}