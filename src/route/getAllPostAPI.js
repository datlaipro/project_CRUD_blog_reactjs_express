const express = require('express');
const router = express.Router();
const getAllPosts = require('../controller/getAllPost');

router.get('/getAllPosts', getAllPosts);
module.exports = router;