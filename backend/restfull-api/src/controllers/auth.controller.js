import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { env } from '../config/environment.js';
import {
  createUser,
  findUserByEmail,
  getUserById,
  updateUser,
  updatePassword,
  getAllUsers,
  deleteUser,
} from '../models/auth.model.js';

// Đăng ký
export const register = async (req, res) => {
  try {
    const { full_name, email, password, phone } = req.body;

    if (!full_name || !email || !password)
      return res.status(400).json({ message: 'Thiếu thông tin.' });

    const existing = await findUserByEmail(email);
    if (existing) return res.status(409).json({ message: 'Email đã tồn tại.' });

    const hashed = await bcrypt.hash(password, 10);

    const newUserId = await createUser({
      full_name,
      email,
      password_hash: hashed,
      phone,
      role: 'user',
    });

    return res.status(201).json({
      message: 'Đăng ký thành công.',
      user_id: newUserId,
    });
  } catch (err) {
    return res.status(500).json({ message: 'Lỗi server.' });
  }
};

// Đăng nhập
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ message: 'Email hoặc mật khẩu sai.' });

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(400).json({ message: 'Email hoặc mật khẩu sai.' });

    const token = jwt.sign({ user_id: user.user_id, role: user.role }, env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({
      message: 'Đăng nhập thành công.',
      token,
    });
  } catch (error) {
    console.error('Error login:', error);
    res.status(500).json({ message: 'Lỗi server.' });
  }
};

// Lấy thông tin cá nhân
export const profile = async (req, res) => {
  const user = await getUserById(req.user.user_id);
  res.json(user);
};

// Cập nhật profile
export const updateProfile = async (req, res) => {
  const { full_name, phone, avatar_url } = req.body;

  await updateUser(req.user.user_id, { full_name, phone, avatar_url });

  res.json({ message: 'Cập nhật thành công.' });
};

// Đổi mật khẩu
export const changePassword = async (req, res) => {
  const { old_password, new_password } = req.body;

  const user = await findUserByEmail(req.user.email);
  const match = await bcrypt.compare(old_password, user.password_hash);

  if (!match) return res.status(400).json({ message: 'Mật khẩu cũ sai.' });

  const hashed = await bcrypt.hash(new_password, 10);
  await updatePassword(req.user.user_id, hashed);

  res.json({ message: 'Đổi mật khẩu thành công.' });
};

// Admin: lấy danh sách user
export const listUsers = async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
};

// Admin: xóa user
export const removeUser = async (req, res) => {
  await deleteUser(req.params.id);
  res.json({ message: 'Xóa user thành công.' });
};
