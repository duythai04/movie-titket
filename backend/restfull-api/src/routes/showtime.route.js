import express from 'express';
import { getShowtime, getShowtimesOfMovie } from '../controllers/showtime.controller.js';

const router = express.Router();

router.get('/:id', getShowtime);
router.get('/movie/:movieId', getShowtimesOfMovie);

export default router;
