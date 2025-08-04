const express = require('express');
const router = express.Router();
const upload = require('../Middleware/verifyUpload'); // middleware multer upload ảnh

const authMiddleware = require('../Middleware/auth'); // Import auth middleware if needed

const fixPost = require('../controller/fixPost');
router.put('/fixPost/:id',authMiddleware,upload.single('thumbnail'), fixPost);
module.exports = router;