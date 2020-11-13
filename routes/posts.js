const express = require('express');
const getPostById = require('../middleware/getPostById');
const router = express.Router();
const app = express();
const Post = require('../models/Post');

//GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)

    } catch (error) {//error on server
        res.status(500).json({ message: error.message })
    }
})

//CREATE A POST
router.post('/', async (req, res) => {
    //create JS object
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        platform: req.body.platform

    })
    try {
        const newPost = await post.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Middleware used in patch & delete
app.use(getPostById);

//UPDATE A POST
router.patch('/:id', getPostById, async (req, res) => {
    if (req.body.title != null) {
        res.post.title = req.body.title;
    }
    if (req.body.content != null) {
        res.post.content = req.body.content;
    }
    if (req.body.author != null) {
        res.post.author = req.body.author;
    }
    if (req.body.platform != null) {
        res.post.platform = req.body.platform;
    }

    try {
        const updatedPost = await res.post.save();
        res.status(200).json({ message: `Post with id: ${res.post.id} updated` }, updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//DELETE A POST
router.delete('/:id', getPostById, async (req, res) => {
    try {
        await res.post.remove();
        res.json({ message: `Post with id: ${res.post.id} deleted` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})



module.exports = router;