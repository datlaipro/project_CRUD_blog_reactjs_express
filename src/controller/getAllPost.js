const express = require('express');
const router = express.Router();
const Post = require('../model/post');

async function getAllPosts(req, res) {

    try {
        const posts = await Post.find()
            .populate('author', 'username') // Lấy username từ bảng User
            .sort({ createdAt: -1 }); // Mới nhất lên đầu

        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi lấy danh sách bài viết' });
    }
}
module.exports = getAllPosts;