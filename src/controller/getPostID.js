const Post = require('../model/post');


async function getPostID(req, res) {
    const { id } = req.params;

    try {
        const post = await Post.findById(id).populate('author', 'username');

        if (!post) {
            return res.status(404).json({ error: 'Không tìm thấy bài viết' });
        }

        res.json(post);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi lấy bài viết' });
    }
}


module.exports = getPostID;