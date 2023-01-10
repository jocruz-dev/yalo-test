const express = require('express');
const {getAllPosts} = require('../controllers/postController')

const router = express.Router()

router.get('/getAll',(req,res)=>{
    getAllPosts(req,res)
})

module.exports = {
    router
}