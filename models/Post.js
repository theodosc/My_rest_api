//const { text } = require('express');
const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    platform:{
        type:String,
        required:true
    },
    postDate:{
        type:Date,
        default:Date.now
    }

})
//after creating Post module we export it to use it in our API
module.exports=mongoose.model('Post',postSchema);
