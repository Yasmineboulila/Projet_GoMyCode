const paiement=require("../controllers/paiement")
const router=require("express").Router()

router.post("/api/paiement",paiement.paiemente)

module.exports={paiment_router:router}