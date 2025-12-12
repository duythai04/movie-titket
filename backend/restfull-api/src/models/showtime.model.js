import { db } from '../config/mysql';

export const getShowtimeById = async (showtime_id) => {
  const [rows] = await db.query(
    `SELECT s.*, m.title_vi, m.poster_url, a.room_name
     FROM showtimes s
     JOIN movies m ON s.movie_id = m.movie_id
     JOIN auditoriums a ON s.auditorium_id = a.auditorium_id
     WHERE s.showtime_id = ?`,
  );
};
