import express from 'express';
import userRoutes from './routes/movie.route.js';
import { env } from './config/environment.js';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';

import showtimeRoutes from './routes/showtime.route.js';
import seatRoutes from './routes/seats.route.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/movies', userRoutes);
app.use('/api/auth', authRoutes);

app.use('/api/showtimes', showtimeRoutes);
app.use('/api/seats', seatRoutes);

app.listen(env.APP_PORT, env.APP_HOST, () => {
  console.log(`http://${env.APP_HOST}:${env.APP_PORT}`);
});

export default app;
