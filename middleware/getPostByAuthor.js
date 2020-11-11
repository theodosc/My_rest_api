const Post = require("../models/Post");

const getPostByAuthor=async (req,res,next)=>{
    let post;
    try{
        post=await Post.find({author:req.params.author}).count();
        if (post===0){
            return res.status(400).json({message:'Cannot find post'})
        }else{
            post=await Post.find({author:req.params.author})
            res.post=post;//exports post to use in routing
        }
    }catch(err){
        return  res.status(500).json({message:err.message})
    }
    
    
    next();
}

module.exports=getPostByAuthor;