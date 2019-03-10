const mongoose = require("mongoose");
const Post = require('./../models/Post');

module.exports = {
    async buscarTodos(req, res){ 
        const posts = await Post.find();
        return res.json(posts);
    },    
    
    async criar(req,res){
        const {originalname: name,size, key, url = '' } = req.file;

        const post = await Post.create({
            name,
            size,
            key,
            url,
        });
        return res.json(post);
    },    

    async deletar(req,res){
        const post = await Post.findById(req.params.id);
        await post.remove();
        return res.send();
    },
};