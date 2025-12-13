import { getSeatsByShowtime } from '../models/seats.model.js';

export const getSeatsByShowtimeController = async (req, res) => {
  try {
    const { showtime_id } = req.params;

    const data = await getSeatsByShowtime(showtime_id);

    if (!data.length) {
      return res.status(404).json({ message: 'Showtime not found' });
    }

    res.json({
      room: {
        auditorium_id: data[0].auditorium_id,
        room_name: data[0].room_name,
      },
      seats: data.map((s) => ({
        seat_id: s.seat_id,
        seat_code: s.seat_code,
        seat_type: s.seat_type.toUpperCase(), // NORMAL | VIP | COUPLE
        price: s.price,
        status: s.status,
      })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
