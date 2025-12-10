// models/auth.model.js
import pool from '../config/mysql.js';

// Tạo user mới
export const createUser = async (user) => {
  const sql = `
    INSERT INTO users (full_name, email, password_hash, phone, role, avatar_url)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await pool.execute(sql, [
    user.full_name,
    user.email,
    user.password_hash,
    user.phone || null,
    user.role || 'user',
    user.avatar_url || null,
  ]);
  return result.insertId;
};

// Tìm user bằng email
export const findUserByEmail = async (email) => {
  const sql = `SELECT * FROM users WHERE email = ? AND is_deleted = 0 LIMIT 1`;
  const [rows] = await pool.execute(sql, [email]);
  return rows[0] || null;
};

// Lấy user bằng ID
export const getUserById = async (id) => {
  const sql = `
    SELECT user_id, full_name, email, phone, role, avatar_url, created_at
    FROM users
    WHERE user_id = ? AND is_deleted = 0
  `;
  const [rows] = await pool.execute(sql, [id]);
  return rows[0] || null;
};

// Update user (tự động chỉ update trường có trong body)
export const updateUser = async (id, data) => {
  let fields = [];
  let values = [];

  if (data.full_name !== undefined) {
    fields.push('full_name = ?');
    values.push(data.full_name);
  }

  if (data.phone !== undefined) {
    fields.push('phone = ?');
    values.push(data.phone);
  }

  if (data.avatar_url !== undefined) {
    fields.push('avatar_url = ?');
    values.push(data.avatar_url);
  }

  if (fields.length === 0) return null;

  const sql = `UPDATE users SET ${fields.join(', ')} WHERE user_id = ?`;
  values.push(id);

  const [result] = await pool.execute(sql, values);
  return result;
};

// Update mật khẩu
export const updatePassword = async (id, password_hash) => {
  const sql = `UPDATE users SET password_hash = ? WHERE user_id = ?`;
  const [result] = await pool.execute(sql, [password_hash, id]);
  return result;
};

// Lấy tất cả user (bỏ user đã xóa)
export const getAllUsers = async () => {
  const sql = `
    SELECT user_id, full_name, email, phone, role, avatar_url, created_at
    FROM users
    WHERE is_deleted = 0
  `;
  const [rows] = await pool.execute(sql);
  return rows;
};

// Soft delete user
export const deleteUser = async (id) => {
  const sql = `UPDATE users SET is_deleted = 1 WHERE user_id = ?`;
  const [result] = await pool.execute(sql, [id]);
  return result;
};
