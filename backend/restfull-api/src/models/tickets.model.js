import db from '../config/mysql.js';

export const createTicket = async (
  showtime_id,
  seat_id,
  user_name,
  ticket_type_id,
  final_price,
) => {
  const [result] = await db.query(
    `INSERT INTO tickets (showtime_id, seat_id, user_name, ticket_type_id, final_price)
     VALUES (?, ?, ?, ?, ?)`,
    [showtime_id, seat_id, user_name, ticket_type_id, final_price],
  );
  return result.insertId;
};
