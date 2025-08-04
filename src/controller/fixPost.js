const Post = require('../model/post');
const authMiddleware = require('../Middleware/auth');
const uploadToR2 = require('./uploadToR2');
async function fixPost(req, res) {
  const { id } = req.params;
  const { title, content, category } = req.body;
  

  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ error: 'Không tìm thấy bài viết' });

    // Kiểm tra quyền: chỉ tác giả mới được sửa
    if (post.author.toString() !== req.user.userId) {
      return res.status(403).json({ error: 'Không có quyền chỉnh sửa bài viết này' });
    }
      // Nếu có file ảnh mới -> upload lên R2
    if (req.file) {
      const thumbnailUrl = await uploadToR2(req.file);
      post.thumbnail = thumbnailUrl;
    }
    // Cập nhật nội dung
    post.title = title || post.title;
    post.content = content || post.content;
    post.category = category || post.category;

    const updatedPost = await post.save();
    res.json({ message: 'Đã cập nhật bài viết', post: updatedPost });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi khi cập nhật bài viết' });
  }
}
module.exports = fixPost;