const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET||"conbokhongcuoixYz1!";

function authMiddleware(req, res, next) {
  const token = req.cookies.token; // ✅ lấy từ cookie

  if (!token) return res.status(401).json({ error: 'Thiếu token' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Token không hợp lệ' });
  }
}

module.exports = authMiddleware;
