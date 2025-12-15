import express from 'express';
import cors from 'cors';

import movieRoutes from './routes/movie.route.js';
import authRoutes from './routes/auth.route.js';
import showtimeRoutes from './routes/showtime.route.js';
import seatRoutes from './routes/seats.route.js';
import foodComboRoutes from './routes/foodcombo.route.js';

import { env } from './config/environment.js';

const app = express();

/* ===== Middlewares ===== */
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

/* ===== Health check ===== */
app.get('/', (req, res) => {
  res.json({ status: 'Backend is running on Render' });
});

/* ===== Routes ===== */
app.use('/api/movies', movieRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/showtimes', showtimeRoutes);
app.use('/api/seats', seatRoutes);
app.use('/api/combos', foodComboRoutes);

/* ===== Start server ===== */
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
