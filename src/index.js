
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(morgan('combined')); // Log HTTP requests to the console

const PORT = 5000;
const mongoose = require('mongoose');
const authMiddleware = require('./Middleware/auth'); // Import auth middleware if needed
const createUserAPI = require('./route/creatUserAPI');
const loginUserAPI = require('./route/loginUser');
const post = require('./route/post'); // Import the post route
app.use('/upload', express.static('upload')); // cho phép truy cập ảnh đã upload
const { swaggerUi, swaggerSpec } = require('./swagger/index');
const getAllPostAPI = require('./route/getAllPostAPI'); // Import the get all posts route
const getPostIDAPI = require('./route/getPostID'); // Import the get post by ID route
const fixPostAPI = require('./route/fixPost'); // Import the fix post route
const deletePostAPI = require('./route/deletePostAPI'); // Import the delete post route
const logOutAPI = require('./route/logOutAPI'); // Import the logout route
mongoose.connect('mongodb://localhost:27017/POST_MANAGEMENT')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(console.error);

app.get('/', (req, res) => {
  res.send('Xin chào từ Express!');
});
// Swagger UI
app.use(express.json()); // Middleware để parse JSON body
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000', // ⚠️ Đổi theo domain FE 
  credentials: true               // ✅ Cho phép gửi cookie từ frontend
}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', getAllPostAPI)
app.use('/api', logOutAPI); // Use the logout route
app.use('/api', fixPostAPI); // Use the fix post route
app.use('/api', getPostIDAPI); // Use the get post by ID route
app.use('/api', createUserAPI); // Sử dụng router cho API tạo người dùng
app.use('/api', loginUserAPI); // Sử dụng router cho API đăng nhập người dùng
app.use('/api', post); // Sử dụng router cho API bài viết
app.use('/api', deletePostAPI); // Use the delete post route
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
