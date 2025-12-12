import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByEmail, createUser } from '../models/auth.model.js';

// ============================
// Register
// ============================
export const register = async ({ full_name, email, password, phone }) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) throw new Error('Email đã tồn tại');

  const password_hash = await bcrypt.hash(password, 10);

  const userId = await createUser({
    full_name,
    email,
    password_hash,
    phone,
    role: 'user',
  });

  return { user_id: userId, full_name, email };
};

// ============================
// Login
// ============================
export const login = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Sai email hoặc mật khẩu');

  const isValid = await bcrypt.compare(password, user.password_hash);
  if (!isValid) throw new Error('Sai email hoặc mật khẩu');

  // ❗ Token chuẩn – đồng bộ với controller + middleware
  const token = jwt.sign(
    {
      user_id: user.user_id, // phải giữ nguyên user_id
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' },
  );

  return {
    token,
    user: {
      user_id: user.user_id,
      full_name: user.full_name,
      email: user.email,
      role: user.role,
    },
  };
};
