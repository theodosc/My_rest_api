const Post = require("../models/Post");

const getPostByPlatform = async (req, res, next) => {
    let post;

    try {
        post = await Post.find({ platform: req.params.platform });
  
        if (!post.length) {//if find() returns []
            return res.status(404).json({ message: 'Cannot find post' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.post = post;//exports post to use in routing
    next();

}

module.exports = getPostByPlatform;