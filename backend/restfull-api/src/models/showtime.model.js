import db from '../config/mysql.js';

export const getShowtimeById = async (id) => {
  const [rows] = await db.query(
    `
    SELECT 
      s.showtime_id,
      s.show_date,
      s.show_time,
      s.format,
      s.price,
      m.movie_id,
      m.title_vi,
      m.poster_url,
      a.auditorium_id,
      a.room_name
    FROM showtimes s
    JOIN movies m ON s.movie_id = m.movie_id
    JOIN auditoriums a ON s.auditorium_id = a.auditorium_id
    WHERE s.showtime_id = ?
    `,
    [id],
  );
  return rows[0];
};

export const getShowtimesByMovie = async (movieId) => {
  const [rows] = await db.query(
    `
    SELECT showtime_id, show_date, show_time, format, price
    FROM showtimes
    WHERE movie_id = ?
    ORDER BY show_date, show_time
    `,
    [movieId],
  );
  return rows;
};
