const Post = require("../models/Post");

const getPostByPlatform=async (req,res,next)=>{
    let post;
    
 try{
        post=await Post.find({platform: req.params.platform}).count();   
           
        if (post===0){
            return res.status(404).json({message:'Cannot find post'})
        }else{
            post=await Post.find({platform: req.params.platform})
            res.post=post;//exports post to use in routing
        }
    }catch(err){
       return  res.status(500).json({message:err.message})
    }
    
    next();
   
}

module.exports=getPostByPlatform;