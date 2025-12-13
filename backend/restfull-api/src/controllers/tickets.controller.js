import { createTicket } from '../models/tickets.model.js';
import { getBookedSeats } from '../models/seats.model.js';

export const bookSeats = async (req, res) => {
  try {
    const { showtime_id, seats, user_name, ticket_type_id } = req.body;

    const booked = await getBookedSeats(showtime_id);

    const alreadyBooked = seats.filter((s) => booked.includes(s));
    if (alreadyBooked.length > 0)
      return res.status(409).json({
        message: 'Một số ghế đã được đặt',
        seats: alreadyBooked,
      });

    const createdTickets = [];

    for (let seat of seats) {
      const ticketId = await createTicket(showtime_id, seat, user_name, ticket_type_id, 0);
      createdTickets.push(ticketId);
    }

    res.json({
      message: 'Đặt vé thành công',
      tickets: createdTickets,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
