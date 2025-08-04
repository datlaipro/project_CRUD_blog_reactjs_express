// const path = require('path');
// const express = require('express');
// const Post = require('../model/post');

// const multer = require('multer');
// const authMiddleware = require('../Middleware/auth'); // Import auth middleware if needed

// const router = express.Router();
// const postController = require('../controller/post');


// // Cấu hình lưu file ảnh
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, 'upload/'),
//     filename: (req, file, cb) => {
//         const ext = path.extname(file.originalname);
//         const name = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
//         cb(null, name);
//     }
// });
// const upload = multer({ storage });
// router.post('/createPost', authMiddleware, upload.single('thumbnail'), postController);
// module.exports = router;
const express = require('express');
const multer = require('multer');
const authMiddleware = require('../Middleware/auth');
const postController = require('../controller/post');

const router = express.Router();

// Dùng memoryStorage để upload lên R2
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.post('/createPost', authMiddleware, upload.single('thumbnail'), postController);

module.exports = router;
