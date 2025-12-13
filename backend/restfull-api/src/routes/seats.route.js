import express from 'express';
import { getSeatsByShowtimeController } from '../controllers/seats.controller.js';

const router = express.Router();

router.get('/showtime/:showtime_id', getSeatsByShowtimeController);

export default router;
