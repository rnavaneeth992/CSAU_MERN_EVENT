const express = require('express');
const app = express();
const cors = require("cors");

// const { posts } = require('./database/posts.js');

const mongoose  = require("mongoose");

const Post = require('./model')

// MIDDLEWARES
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/csaudb",{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Mongodb connected");

    //create
    app.post("/posts", (req,res)=>{
        const post = new Post(req.body);
        try{
            console.log("New post has been created");

            const newPost = post.save();
            res.status(201).json(newPost);
        }
        catch(err){
            res.status(400).json({message: "error in storing the post"})
        }

    })

    //read
    app.get("/posts",async (req,res) => {
        try{
            const posts = await Post.find({});
            // console.log(posts);
            res.json(posts);
        }catch(err){
            res.status(401).json({message: "Cannot retrieve posts"});
        }
    })

    //read
    app.get("/posts/:id",async (req,res) => {
        let id = req.params.id;

        try{
            const posts = await Post.findById(id);
            res.json(posts);
        }catch(err){
            res.status(401).json({message: "Cannot retrieve posts"});
        }
    })

    //update
    app.put("/posts/:id",async (req,res) => {
        let id = req.params.id;
        let options = {};
        options = req.body;

        try{
            const posts = await Post.findByIdAndUpdate(id, options);
            if(!posts){
                return res.json({message: "No such posts"});
            }
            res.json(posts);
        }catch(err){
            res.status(401).json({message: "Cannot retrieve posts"});
        }
    })

    //delete
    app.delete("/posts/:id",async (req,res) => {
        let id = req.params.id;

        try{
            const posts = await Post.findByIdAndDelete(id);
            if(!posts){
                return res.json({message: "No such posts"});
            }
            res.json(posts);
        }catch(err){
            res.status(401).json({message: "Cannot retrieve posts"});
        }
    })


})
.catch((err)=>{
    console.log("Database not connected")
})

const PORT = 9000;

app.listen(PORT, (req,res) => {
    console.log("🎉 Server started!")
})