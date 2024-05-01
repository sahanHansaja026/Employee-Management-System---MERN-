const express = require("express");
const Posts = require('../models/department');

const routerd = express.Router();

// save employee detail
routerd.post('/post_d/save', async (req, res) => {
    try {
        let newPost = new Posts(req.body);
        await newPost.save();
        return res.status(200).json({ success: "Post saved successfully" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// get posts
routerd.get('/posts_d', async (req, res) => {
    try {
        const posts = await Posts.find().exec();
        return res.status(200).json({ success: true, existingPosts: posts });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// get a specific post by ID
routerd.get('/post_d/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Posts.findById(postId).exec();
        if (!post) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }
        return res.status(200).json({ success: true, post });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});


// update post
routerd.put('/post_d/update/:id', async (req, res) => {
    try {
        await Posts.findByIdAndUpdate(req.params.id, { $set: req.body });
        return res.status(200).json({ success: "Post updated successfully" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// delete posts
routerd.delete('/post_d/delete/:id', async (req, res) => {
    try {
        const deletedPost = await Posts.findByIdAndRemove(req.params.id);
        return res.json({ message: "Post deleted successfully", deletedPost });
    } catch (error) {
        return res.status(400).json({ message: "Error deleting post", error: error.message });
    }
});

module.exports = routerd;
