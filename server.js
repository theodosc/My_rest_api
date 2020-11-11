const express=require('express');
const app=express();

require('dotenv').config();
//connect to DB using MongoDB Compass to check
const mongoose=require('mongoose');
mongoose.connect(process.env.DB_URL,
    {useUnifiedTopology:true,useNewUrlParser:true});
const db=mongoose.connection;
db.on('error',(error)=>console.error(error));
db.once('open',()=>
    console.log('Connected to Database'));    

//middleware to accept JSON
app.use(express.json());
//app.use(express.urlencoded({extended:false}));
//middleware to use posts route
 const postsRouter=require('./routes/posts');
 app.use('/posts',postsRouter)
//use search posts route
const searchRouter=require('./routes/searchPosts');
app.use('/search',searchRouter);



PORT=process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server listening to port ${PORT}`));





