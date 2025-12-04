import {
  getMovieById,
  getMovieByGenresId,
  getMovieCastId,
  getMovieReviewId,
  getMovieShowtimeId,
} from "../models/movie.model.js";

export const getMovieDetails = async (movie_id) => {
  const movie = await getMovieById(movie_id);
  if (!movie) return null;

  const genres = await getMovieByGenresId(movie_id);
  const cast = await getMovieCastId(movie_id);
  const reviews = await getMovieReviewId(movie_id);
  const showtimes = await getMovieShowtimeId(movie_id);

  return {
    ...movie,
    genres: genres.map((g) => g.genre_name),
    cast: cast,
    reviews: reviews,
    showtimes: showtimes,
  };
};
  