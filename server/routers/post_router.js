const router = require("express").Router()
const posteControler=require('../controllers/post_controller')

router.post('/api/createPost', posteControler.create_post)


module.exports = {
    post_router:router
}