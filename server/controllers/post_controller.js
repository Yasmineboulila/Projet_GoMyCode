const Post=require('../models/post_model')

module.exports={
    create_post:((req,res)=>{
try {
    const post=new Post(req.body)
	post.save()
	res.status(201).send({msg:"post created",post})
} catch (error) {
    res.status(500).send(error)
}
    }),
    get_post:(async(req,res)=>{
        try {
            const data=await Post.find({})
            res.status(200).send({msg:"post done",data})
        } catch (error) {
            res.status(500).send(error)
        }
    }),
    
    delete_post:(async(req,res)=>{
        try {
            const data=await Post.findByIdAndRemove({_id:req.params.id})
			res.status(201).send({msg:"post deleted",data})
        } catch (error) {
            res.status(500).send(error)
            
        }

    }),
    update_post:(async(req,res)=>{
        try {
            await Post.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
        const data=await Post.findById({_id:req.params.id})
            res.status(202).send({msg:"post updated",data})
        } catch (error) {
            res.status(500).send(error)
            
        }
    })

}