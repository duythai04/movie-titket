import express from 'express';
import cors from 'cors';

import userRoutes from './routes/movie.route.js';
import authRoutes from './routes/auth.route.js';
import showtimeRoutes from './routes/showtime.route.js';
import seatRoutes from './routes/seats.route.js';
import foodCombos from './routes/foodcombo.route.js'

import { env } from './config/environment.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'Backend is running on Render' });
});

app.use('/movies', userRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/showtimes', showtimeRoutes);
app.use('/api/seats', seatRoutes);

app.use('/api/combos', foodCombos);



const PORT = process.env.PORT || env.APP_PORT || 10000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

export default app;
