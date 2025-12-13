import { getShowtimeById, getShowtimesByMovie } from '../models/showtime.model.js';

export const getShowtime = async (req, res) => {
  try {
    const showtime = await getShowtimeById(req.params.id);
    if (!showtime) {
      return res.status(404).json({ message: 'Showtime not found' });
    }
    res.json(showtime);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getShowtimesOfMovie = async (req, res) => {
  try {
    const data = await getShowtimesByMovie(req.params.movieId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
