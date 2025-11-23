import express from "express";
import {
  register,
  login,
  profile,
  updateProfile,
  changePassword,
  listUsers,
  removeUser,
} from "../controllers/auth.controller.js";

import {
  authMiddleware,
  adminMiddleware,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

// Public
router.post("/register", register);
router.post("/login", login);

// User
router.get("/profile", authMiddleware, profile);
router.put("/profile", authMiddleware, updateProfile);
router.put("/change-password", authMiddleware, changePassword);

// Admin
router.get("/users", authMiddleware, adminMiddleware, listUsers);
router.delete("/users/:id", authMiddleware, adminMiddleware, removeUser);

export default router;
