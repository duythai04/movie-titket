import db from '../config/mysql.js';

export const getSeatsByShowtime = async (showtime_id) => {
  const [rows] = await db.query(
    `
    SELECT
      a.auditorium_id,
      a.room_name,

      s.seat_id,
      CONCAT(s.seat_row, s.seat_number) AS seat_code,
      st.name AS seat_type,
      st.extra_price AS price,

      COALESCE(ss.status, 'available') AS status

    FROM showtimes sh
    JOIN auditoriums a 
      ON sh.auditorium_id = a.auditorium_id

    JOIN seats s 
      ON s.auditorium_id = a.auditorium_id

    JOIN seat_types st 
      ON s.seat_type_id = st.seat_type_id

    LEFT JOIN showtime_seats ss 
      ON ss.seat_id = s.seat_id
     AND ss.showtime_id = sh.showtime_id

    WHERE sh.showtime_id = ?
    ORDER BY s.seat_row, s.seat_number
    `,
    [showtime_id]
  );

  return rows;
};
