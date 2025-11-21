import mysql from "mysql2/promise.js";
import data from "./movies.js";

async function importMovies() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "230304",
    database: "movie_booking_system",
  });

  await db.execute("DELETE FROM movies");

  for (const movie of data) {
    await db.execute(
      `INSERT INTO movies (
        movie_id, title_vi, title_en, poster_url, trailer_url,
        synopsis, duration_mins, release_date, age_rating,
        language, director, status, price, rating, is_showing
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        movie.movie_id,
        movie.title_vi,
        movie.title_en,
        movie.poster_url,
        movie.trailer_url,
        movie.synopsis,
        movie.duration_mins,
        movie.release_date,
        movie.age_rating,
        movie.language,
        movie.director,
        movie.status,
        movie.price,
        movie.rating,
        movie.is_showing,
      ]
    );
  }

  console.log("successfully!");
  await db.end();
}

importMovies();
