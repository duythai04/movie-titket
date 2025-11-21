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
