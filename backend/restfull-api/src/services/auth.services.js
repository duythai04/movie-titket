import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findByEmail, createUser } from "../models/auth.model.js";

export const register = async ({ name, email, password }) => {
  const existingUser = await findByEmail(email);
  if (existingUser) throw new Error("Email đã tồn tại");

  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await createUser(name, email, hashedPassword);

  return { id: userId, name, email };
};

export const login = async ({ email, password }) => {
  const user = await findByEmail(email);
  if (!user) throw new Error("Sai email hoặc mật khẩu");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Sai email hoặc mật khẩu");

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { token, user: { id: user.id, name: user.name, email: user.email } };
};
