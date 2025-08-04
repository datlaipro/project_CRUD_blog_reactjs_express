const express = require('express');
const router = express.Router();
const Post = require('../model/post');
const auth = require('../Middleware/auth');


async function deletePost(req, res) {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ error: 'Không tìm thấy bài viết' });

        // Kiểm tra quyền
        if (post.author.toString() !== req.user.userId) {
            return res.status(403).json({ error: 'Không có quyền xóa bài viết này' });
        }

        await Post.findByIdAndDelete(id);
        res.json({ message: 'Đã xóa bài viết thành công' });
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi xóa bài viết' });
    }
}
module.exports = deletePost;