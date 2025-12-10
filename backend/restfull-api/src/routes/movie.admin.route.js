import express from 'express';

import {
  createMovieCtrl,
  getMovieByIdCtrl,
  getMovieCtrl,
  updateMovieCtrl,
  deleteMovieCtrl,
} from '~/controllers/movie.admin.controller';
import { authMiddleware, adminMiddleware } from '~/middlewares/auth.middleware';
