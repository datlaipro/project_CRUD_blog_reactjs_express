const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET||"conbokhongcuoixYz1!";

async function loginUser(req, res) {
  const { username, password } = req.body;
  // console.log('Đăng nhập với username:', username, 'password:', password,"SECRET_KEY",SECRET_KEY);

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'Sai username hoặc password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Sai username hoặc password' });
    }

    // ✅ Tạo JWT
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    // ✅ Gửi token trong cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,        // 👉 Bật `true` nếu dùng HTTPS
      sameSite: 'lax',      // hoặc 'strict' nếu cần bảo mật cao hơn
      maxAge: 36000000,      // 1h
    });

    res.json({ message: 'Đăng nhập thành công',username });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi server khi đăng nhập' });
  }
}

module.exports = loginUser;
