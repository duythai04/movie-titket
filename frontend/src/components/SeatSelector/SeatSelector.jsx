import React, { useEffect, useState, useMemo } from 'react';
import axiosClient from '../../api/axiosClient';
import './SeatSelector.scss';

export default function SeatSelector({ showtime_id }) {
  const [room, setRoom] = useState(null);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH SEATS ================= */
  useEffect(() => {
    if (!showtime_id) return;

    const controller = new AbortController();

    const fetchSeats = async () => {
      try {
        setLoading(true);

        const res = await axiosClient.get(`/seats/showtime/${showtime_id}`, {
          signal: controller.signal,
        });

        setRoom(res.data.room);
        setSeats(res.data.seats);
        setSelectedSeats([]);
        setTimeLeft(5 * 60);
      } catch (err) {
        if (err.name !== 'CanceledError') {
          console.error('Lỗi load ghế:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSeats();

    return () => {
      controller.abort(); // cleanup khi unmount hoặc showtime_id đổi
    };
  }, [showtime_id]);

  /* ================= COUNTDOWN ================= */
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

  const formatTime = (t) =>
    `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;

  /* ================= GROUP SEAT BY ROW ================= */
  const seatsByRow = useMemo(() => {
    const map = {};
    seats.forEach((seat) => {
      const row = seat.seat_code.charAt(0);
      if (!map[row]) map[row] = [];
      map[row].push(seat);
    });

    Object.values(map).forEach((rowSeats) =>
      rowSeats.sort(
        (a, b) => parseInt(a.seat_code.slice(1), 10) - parseInt(b.seat_code.slice(1), 10),
      ),
    );

    return map;
  }, [seats]);

  /* ================= FIND PAIR SEAT (CHUẨN) ================= */
  const findPairSeat = (seat) => {
    const row = seat.seat_code.charAt(0);
    const num = parseInt(seat.seat_code.slice(1), 10);
    return seats.find((s) => s.seat_type === 'COUPLE' && s.seat_code === `${row}${num + 1}`);
  };

  /* ================= TOGGLE SEAT ================= */
  const toggleSeat = (seat) => {
    if (seat.status === 'booked') return;

    // ===== GHẾ ĐÔI =====
    if (seat.seat_type === 'COUPLE') {
      const pairSeat = findPairSeat(seat);
      if (!pairSeat || pairSeat.status === 'booked') return;

      const pairIds = [seat.seat_id, pairSeat.seat_id];
      const isSelected = pairIds.every((id) => selectedSeats.includes(id));

      setSelectedSeats(
        isSelected
          ? selectedSeats.filter((id) => !pairIds.includes(id))
          : [...new Set([...selectedSeats, ...pairIds])],
      );
      return;
    }

    // ===== GHẾ THƯỜNG / VIP =====
    setSelectedSeats((prev) =>
      prev.includes(seat.seat_id)
        ? prev.filter((id) => id !== seat.seat_id)
        : [...prev, seat.seat_id],
    );
  };

  /* ================= SEAT CLASS ================= */
  const getSeatClass = (seat, pairSeat = null) => {
    let cls = 'seat';

    if (seat.seat_type === 'VIP') cls += ' vip';
    if (seat.seat_type === 'COUPLE') cls += ' couple';

    if (seat.status === 'booked' || pairSeat?.status === 'booked') {
      cls += ' booked';
    }

    if (
      selectedSeats.includes(seat.seat_id) ||
      (pairSeat && selectedSeats.includes(pairSeat.seat_id))
    ) {
      cls += ' selected';
    }

    return cls;
  };

  /* ================= TOTAL PRICE ================= */
  const totalPrice = selectedSeats.reduce((sum, id) => {
    const seat = seats.find((s) => s.seat_id === id);
    return sum + (seat?.price || 0);
  }, 0);

  if (!showtime_id) return <div className="seat-wrapper">Vui lòng chọn suất chiếu</div>;
  if (loading) return <div className="seat-wrapper">Đang tải sơ đồ ghế...</div>;

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
            {seatsByRow[row].map((seat) => {
              // ===== GHẾ ĐÔI: CHỈ RENDER GHẾ ĐẦU (SỐ LẺ) =====
              if (seat.seat_type === 'COUPLE') {
                const num = parseInt(seat.seat_code.slice(1), 10);
                if (num % 2 === 0) return null;

                const pairSeat = findPairSeat(seat);
                if (!pairSeat) return null;

                return (
                  <div
                    key={seat.seat_id}
                    className={getSeatClass(seat, pairSeat)}
                    onClick={() => toggleSeat(seat)}
                  >
                    {seat.seat_code}-{pairSeat.seat_code.slice(1)}
                  </div>
                );
              }

              // ===== GHẾ THƯỜNG / VIP =====
              return (
                <div
                  key={seat.seat_id}
                  className={getSeatClass(seat)}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat.seat_code}
                </div>
              );
            })}
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

      <div className="payment">
        <button disabled={selectedSeats.length === 0}>Thanh toán</button>
      </div>
    </div>
  );
}
