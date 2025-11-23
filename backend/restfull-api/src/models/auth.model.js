import pool from "../config/mysql.js";

export const createUser = async (user) => {
  const sql = `
    INSERT INTO users (full_name, email, password_hash, phone, role)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await pool.execute(sql, [
    user.full_name,
    user.email,
    user.password_hash,
    user.phone || null,
    user.role || "user",
  ]);
  return result.insertId;
};

export const findUserByEmail = async (email) => {
  const sql = `SELECT * FROM users WHERE email = ? LIMIT 1`;
  const [rows] = await pool.execute(sql, [email]);
  return rows[0] || null;
};

export const getUserById = async (id) => {
  const sql = `SELECT user_id, full_name, email, phone, role, avatar_url FROM users WHERE user_id = ?`;
  const [rows] = await pool.execute(sql, [id]);
  return rows[0] || null;
};

export const updateUser = async (id, data) => {
  const sql = `
    UPDATE users
    SET full_name = ?, phone = ?, avatar_url = ?
    WHERE user_id = ?
  `;
  const [result] = await pool.execute(sql, [
    data.full_name,
    data.phone,
    data.avatar_url,
    id,
  ]);
  return result;
};

export const updatePassword = async (id, password_hash) => {
  const sql = `UPDATE users SET password_hash = ? WHERE user_id = ?`;
  const [result] = await pool.execute(sql, [password_hash, id]);
  return result;
};

export const getAllUsers = async () => {
  const sql = `SELECT user_id, full_name, email, phone, role FROM users`;
  const [rows] = await pool.execute(sql);
  return rows;
};

export const deleteUser = async (id) => {
  const sql = `DELETE FROM users WHERE user_id = ?`;
  const [result] = await pool.execute(sql, [id]);
  return result;
};
