const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/user'); // Import model User

async function createUser(req, res) {
    const { username, password } = req.body;


    try {
        // Kiểm tra trùng username
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username đã tồn tại' });
        }

        // Tạo user mới (password sẽ tự động được mã hóa)
        const user = new User({ username, password });
        await user.save();

        res.status(201).json({ message: 'Đăng ký thành công', userId: user._id });
    } catch (error) {
        res.status(500).json({ error: 'Đã xảy ra lỗi server' });
    }
}
module.exports = createUser;