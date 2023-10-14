const express=require("express")
const cors=require("cors")
const port=5679

const {post_router}=require('./server/routers/post_router')
const bodyParser = require('body-parser')

const app=express()
// app.use(cors({
//     origin:"http://localhost:3000",
//     credentials:true,
//     optionsSuccessStatus:200
// }))

const connecting=require("./server/configDB/config")
const {user_router} = require("./server/routers/user_router")
const {sms_router} = require("./server/routers/sms_router")
const {email_router} = require("./server/routers/email_router")
const {paiement_router} = require("./server/routers/paiement_router")
app.use(express.json())
connecting()
app.use(bodyParser.json())

app.use("/", post_router)
app.use("/",user_router)
app.use("/",sms_router)
app.use("/", email_router)
app.use("/", paiement_router)

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})