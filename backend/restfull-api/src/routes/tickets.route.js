import express from 'express';
import { bookSeats } from '../controllers/tickets.controller.js';

const router = express.Router();
router.post('/book', bookSeats);

export default router;
