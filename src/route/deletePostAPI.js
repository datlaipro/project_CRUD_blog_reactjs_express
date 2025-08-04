const deletePostAPI = require('../controller/deletePost');
const authMiddleware = require('../Middleware/auth'); // Import auth middleware if needed

const express = require('express');
const router = express.Router();
router.delete('/deletePost/:id', authMiddleware, deletePostAPI);
module.exports = router;