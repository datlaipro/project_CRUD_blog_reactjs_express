const { PutObjectCommand } = require('@aws-sdk/client-s3');
const r2 = require('../config/r2');
const path = require('path');
const { randomUUID } = require('crypto');

async function uploadToR2(file) {
  const ext = path.extname(file.originalname);
  const key = `post/${randomUUID()}${ext}`; // Tạo tên file duy nhất bằng UUID và giữ nguyên phần mở rộng

  const command = new PutObjectCommand({
    Bucket: "posting-management", // ✅ chính xác
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  });
console.log('[UPLOAD KEY]', key);

  await r2.send(command);
  const publicUrl = `https://pub-3d10e52fdf5d49fba5f48198b8864aa8.r2.dev/${key}`;
  return publicUrl;
}


module.exports = uploadToR2;
