const express=require("express")
const cors=require("cors")
const port=5662

const {post_router}=require('./server/routers/post_router')


const app=express()
app.use(cors({
    origin:"http://localhost:3662",
    credentials:true,
    optionsSuccessStatus:200
}))

const connecting=require("./server/configDB/config")
app.use(express.json())
connecting()

app.use("/", post_router)

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})