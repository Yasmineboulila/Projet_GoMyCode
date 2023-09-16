const Post=require('../models/post_model')

module.exports={
    create_post:(async(res,req)=>{
try {
    const post=new Post(req.body)
	post.save()
	res.status(201).send({msg:"post created",post})
} catch (error) {
    res.status(500).send(error)
}
    })

}