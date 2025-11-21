import * as UserService from "../services/movie.services.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await UserService.findAllMovies();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMovieId = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await UserService.findMovieId(id);

    res.json(movie);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
