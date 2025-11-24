import { getAllMovies, getMovieById } from "../models/movie.model.js";

import { getMovieDetails } from "../services/movie.services.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMovieDetailController = async (req, res) => {
  try {
    const { movie_id } = req.params;

    const movie = await getMovieDetails(movie_id);
    if (!movie) return res.status(404).json({ message: "Không tìm thấy phim" });

    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
