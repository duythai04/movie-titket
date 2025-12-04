import db from "../config/mysql.js";

export const getAllMovies = async () => {
  const [rows] = await db.query("SELECT * FROM movies");
  return rows;
};

export const getMovieById = async (movie_id) => {
  const [rows] = await db.query("SELECT * FROM movies WHERE movie_id = ?", [
    movie_id,
  ]);
  return rows[0];
};

export const getMovieByGenresId = async (movie_id) => {
  const [rows] = await db.query(
    "SELECT genre_name FROM movie_genres WHERE movie_id = ?",
    [movie_id]
  );
  return rows;
};

export const getMovieCastId = async (movie_id) => {
  const [rows] = await db.query(
    "SELECT actor_name FROM movie_cast WHERE movie_id = ?",
    [movie_id]
  );
  return rows;
};

export const getMovieReviewId = async (movie_id) => {
  const [rows] = await db.query(
    "SELECT id, user_name, rating, comment FROM movie_reviews WHERE movie_id = ?",
    [movie_id]
  );
  return rows;
};

export const getMovieShowtimeId = async (movie_id) => {
  const [rows] = await db.query(
    "SELECT show_date, show_time FROM showtimes WHERE movie_id = ?",
    [movie_id]
  );
  return rows;
};
  