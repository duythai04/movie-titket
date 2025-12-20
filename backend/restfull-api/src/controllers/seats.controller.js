import { getSeatsByShowtime } from '../models/seats.model.js';

export const getSeatsByShowtimeController = async (req, res) => {
  try {
    const { showtime_id } = req.params;

    const data = await getSeatsByShowtime(showtime_id);



    return res.status(200).json({
      room: data.length
        ? {
            auditorium_id: data[0].auditorium_id,
            room_name: data[0].room_name,
          }
        : null,

      seats: data.map((s) => ({
        seat_id: s.seat_id,
        seat_code: s.seat_code,
        seat_type: s.seat_type.toUpperCase(),
        price: s.price,
        status: s.status ?? 'AVAILABLE', 
      })),
    });

  } catch (err) {
    console.error('Lỗi load ghế:', err);
    return res.status(500).json({
      message: 'Lỗi server khi load ghế',
    });
  }
};
