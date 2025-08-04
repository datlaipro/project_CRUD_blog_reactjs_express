require('dotenv').config();
const { S3Client } = require('@aws-sdk/client-s3');

const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT || 'https://130ccd5b9520e2e847a1afaabbb6adb9.r2.cloudflarestorage.com',
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '142305c6ce07c8c2f4c6a308d4e78093',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '4ba000b2c814a9fb6d6bd3b170af064f2216dda944c9d613891e82d67501591c',
  },
});

module.exports = r2;
