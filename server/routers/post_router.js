const router = require("express").Router()
const postControler=require('../controllers/post_controller')
const { auth } = require("../middleware/auth")

router.post('/api/createPost',auth, postControler.create_post)
router.get('/api/getPost',postControler.get_post)
router.put('/api/updatePost/:id',postControler.update_post)
router.delete("/api/deletePost/:id",postControler.delete_post)


module.exports = {
    post_router:router
}