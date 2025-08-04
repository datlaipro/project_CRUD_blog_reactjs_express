const uploadToR2 = require('./uploadToR2');
const Post = require('../model/post');

async function createPost(req, res) {
  const { title, content, category } = req.body;

  try {
    let thumbnailUrl = '';
    if (req.file) {
      thumbnailUrl = await uploadToR2(req.file); // Upload file và lấy URL
    }
    console.log(req)
    const post = await Post.create({
      title,
      content,
      category,
      thumbnail: thumbnailUrl,
      author: req.user.userId,
    });

    res.status(201).json({ message: 'Tạo bài viết thành công', post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi tạo bài viết' });
  }
}


module.exports = createPost;