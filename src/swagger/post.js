/**
 * @swagger
 * /api/createPost:
 *   post:
 *     summary: Tạo bài viết mới
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category:
 *                 type: string
 *               thumbnail:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Tạo bài viết thành công
 *       401:
 *         description: Thiếu hoặc sai token
 */

/**
 * @swagger
 * /api/fixPost/{id}:
 *   put:
 *     summary: Cập nhật bài viết của chính mình
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID bài viết cần cập nhật
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đã cập nhật bài viết thành công
 *       403:
 *         description: Không có quyền
 *       404:
 *         description: Không tìm thấy bài viết
 */
/**
 * @swagger
 * /api/deletePost/{id}:
 *   delete:
 *     summary: Xóa bài viết của chính mình
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID bài viết cần xóa
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Đã xóa bài viết thành công
 *       403:
 *         description: Không có quyền
 *       404:
 *         description: Không tìm thấy bài viết
 */
