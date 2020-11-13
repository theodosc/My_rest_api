const Post = require("../models/Post");

const getPostById = async (req, res, next) => {
    let post;
    try {
        post = await Post.findById(req.params.id)
        if (post == null) {
            return res.status(400).json({ message: 'Cannot find post' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.post = post;//exports post to use in routing
    console.log(res.post);
    next();
}

module.exports = getPostById;