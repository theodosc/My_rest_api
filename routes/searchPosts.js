const express = require('express');
const router = express.Router();
const app = express();
const Post = require('../models/Post');
const getPostByAuthor = require('../middleware/getPostByAuthor');
app.use(getPostByAuthor);
const getPostByPlatform = require('../middleware/getPostByPlatform');
app.use(getPostByPlatform);

//Gets all posts by
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)

    } catch (error) {//error on server
        res.status(500).json({ message: error.message })
    }
})
//Get for requesting parameter platform
router.get('/platform',(req,res)=> res.status(400).json({message:'name parameter for platform is needed'}))
//Get for requesting parameter author
router.get('/author',(req,res)=> res.status(400).json({message:'name parameter for author is needed'}))

//GET all posts of the same platform
router.get('/platform/:platform', getPostByPlatform, async (req, res) => {
    try {
        res.json(res.post);


    } catch (error) {//error on server
        res.status(500).json({ message: error.message })
    }
})

//GET all posts of the same author
router.get('/author/:author', getPostByAuthor, async (req, res) => {
    try {

        res.json(res.post);

    } catch (error) {//error on server
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;