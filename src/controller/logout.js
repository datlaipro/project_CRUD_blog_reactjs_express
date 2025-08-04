// app.post('/api/logout', (req, res) => {
//   res.clearCookie('token');
//   res.json({ message: 'Đã đăng xuất' });
// });
const express = require('express');
const router = express.Router();

function logOut(req, res) {
  res.clearCookie('token');
  res.json({ message: 'Đã đăng xuất' });
    
}

module.exports = logOut;