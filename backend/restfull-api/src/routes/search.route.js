import express from 'express';
import { searchMovie } from '../controllers/search.controller.js';

const router = express.Router();

router.get('/', searchMovie);

console.log('✅ search.route.js loaded');

export default router;