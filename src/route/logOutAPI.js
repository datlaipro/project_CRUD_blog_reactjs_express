const logOut = require('../controller/logout');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/auth'); // Import auth middleware if needed

router.post('/logout',authMiddleware, logOut);
module.exports = router;