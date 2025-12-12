import express from 'express';

import {
  createMovieCtrl,
  getMovieByIdCtrl,
  getMovieCtrl,
  updateMovieCtrl,
  deleteMovieCtrl,
} from '~/controllers/movie.admin.controller';
import { authMiddleware, adminMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();
    
router.post("/", authMiddleware, adminMiddleware, createMovieCtrl);
router.get("/", authMiddleware, adminMiddleware, getMovieCtrl);
router.get("/:id", authMiddleware, adminMiddleware, getMovieByIdCtrl);
router.put("/:id", authMiddleware, adminMiddleware, updateMovieCtrl);
router.delete("/:id", authMiddleware, adminMiddleware, deleteMovieCtrl);

export default router;