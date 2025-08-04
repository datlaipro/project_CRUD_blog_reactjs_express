const express = require('express');
const router = express.Router();
const getPostID = require('../controller/getPostID');
router.get('/getPostID/:id', getPostID);
module.exports = router;