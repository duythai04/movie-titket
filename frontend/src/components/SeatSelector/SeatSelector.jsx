import React, { useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';
import './SeatSelector.scss';

export default function SeatSelector({ showtime_id }) {
  const [room, setRoom] = useState(null);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 phút
  const [loading, setLoading] = useState(false);

  // =========================
  // FETCH SEATS BY SHOWTIME
  // =========================
  useEffect(() => {
    if (!showtime_id) return;

    const fetchSeats = async () => {
      try {
        setLoading(true);
        const res = await axiosClient.get(`/api/seats/showtime/${showtime_id}`);
        setRoom(res.data.room);
        setSeats(res.data.seats);
        setSelectedSeats([]);
        setTimeLeft(5 * 60);
      } catch (err) {
        console.error('Lỗi load ghế:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSeats();
  }, [showtime_id]);

  // =========================
  // COUNTDOWN GIỮ GHẾ
  // =========================
  useEffect(() => {
    if (!showtime_id) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSelectedSeats([]);
          alert('Hết thời gian giữ ghế, vui lòng chọn lại!');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showtime_id]);

  // =========================
  // FORMAT TIME
  // =========================
  const formatTime = (t) => {
    const m = String(Math.floor(t / 60)).padStart(2, '0');
    const s = String(t % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  // =========================
  // GROUP SEATS BY ROW
  // =========================
  const seatsByRow = seats.reduce((acc, seat) => {
    const row = seat.seat_code[0];
    if (!acc[row]) acc[row] = [];
    acc[row].push(seat);
    return acc;
  }, {});

  // =========================
  // TOGGLE SEAT
  // =========================
  const toggleSeat = (seat) => {
    if (seat.status === 'BOOKED') return;

    // xử lý ghế đôi
    if (seat.seat_type === 'COUPLE') {
      const num = parseInt(seat.seat_code.slice(1));
      const pairCode =
        num % 2 === 0 ? `${seat.seat_code[0]}${num - 1}` : `${seat.seat_code[0]}${num + 1}`;

      const pairSeat = seats.find((s) => s.seat_code === pairCode);
      if (!pairSeat || pairSeat.status === 'BOOKED') return;

      const both = [seat.seat_id, pairSeat.seat_id];
      const selected = both.every((id) => selectedSeats.includes(id));

      setSelectedSeats(
        selected
          ? selectedSeats.filter((id) => !both.includes(id))
          : [...new Set([...selectedSeats, ...both])],
      );
      return;
    }

    // ghế thường / VIP
    setSelectedSeats((prev) =>
      prev.includes(seat.seat_id)
        ? prev.filter((id) => id !== seat.seat_id)
        : [...prev, seat.seat_id],
    );
  };

  // =========================
  // CLASS GHẾ
  // =========================
  const getSeatClass = (seat) => {
    let cls = 'seat';

    if (seat.seat_type === 'VIP') cls += ' vip';
    if (seat.seat_type === 'COUPLE') cls += ' couple';
    if (seat.status === 'BOOKED') cls += ' booked';
    if (selectedSeats.includes(seat.seat_id)) cls += ' selected';

    return cls;
  };

  // =========================
  // TÍNH TIỀN
  // =========================
  const totalPrice = selectedSeats.reduce((sum, id) => {
    const seat = seats.find((s) => s.seat_id === id);
    return sum + (seat?.price || 0);
  }, 0);

  if (!showtime_id) {
    return <div className="seat-wrapper">Vui lòng chọn suất chiếu</div>;
  }

  if (loading) {
    return <div className="seat-wrapper">Đang tải sơ đồ ghế...</div>;
  }

  return (
    <div className="seat-wrapper">
      <h2>{room?.room_name}</h2>

      <div className="countdown">
        Thời gian giữ ghế: <strong>{formatTime(timeLeft)}</strong>
      </div>

      <div className="screen">MÀN HÌNH</div>

      <div className="seat-container">
        {Object.keys(seatsByRow).map((row) => (
          <div key={row} className="seat-row">
            {seatsByRow[row].map((seat) => (
              <div
                key={seat.seat_id}
                className={getSeatClass(seat)}
                onClick={() => toggleSeat(seat)}
              >
                {seat.seat_code}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="info">
        <p>
          Ghế đã chọn:{' '}
          {selectedSeats.map((id) => seats.find((s) => s.seat_id === id)?.seat_code).join(', ') ||
            'Chưa chọn'}
        </p>
        <p>
          <strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}đ
        </p>
      </div>
    </div>
  );
}
