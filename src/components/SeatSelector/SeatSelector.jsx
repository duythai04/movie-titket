import React, { useEffect, useState } from "react";
import { seatRows } from "./SeatsData";
import "./SeatSelector.scss";

const VIP_SEATS = ["D", "E", "F", "G"].flatMap((row) =>
  Array.from({ length: 11 }, (_, i) => `${row}${i + 1}`)
);

const COUPLE_SEATS = ["H"].flatMap((row) =>
  Array.from({ length: 11 }, (_, i) => `${row}${i + 1}`)
);
const BOOKED_SEATS = ["E5", "E6", "F5", "F6", "G5", "G6"];

export default function SeatSelector() {
  const [selected, setSelected] = useState([]);

  const toggleSeat = (seat) => {
    // không cho chọn ghế đã đặt
    if (BOOKED_SEATS.includes(seat)) return;

    // nếu không phải ghế đôi → xử lý bình thường
    if (!COUPLE_SEATS.includes(seat)) {
      if (selected.includes(seat)) {
        setSelected(selected.filter((s) => s !== seat));
      } else {
        setSelected([...selected, seat]);
      }
      return;
    }

    // XỬ LÝ GHẾ ĐÔI

    const row = seat[0];
    const num = parseInt(seat.slice(1));
    const pairSeat = num % 2 === 0 ? `${row}${num - 1}` : `${row}${num + 1}`;

    // nếu ghế đôi kia đã bị BOOKED thì không cho chọn
    if (BOOKED_SEATS.includes(pairSeat)) return;

    const bothSeats = [seat, pairSeat];
    const isSelected = bothSeats.every((s) => selected.includes(s));

    if (isSelected) {
      // Nếu đã chọn cả 2 → bỏ cả 2
      setSelected(selected.filter((s) => !bothSeats.includes(s)));
    } else {
      // Nếu chưa chọn → chọn cả cặp
      setSelected([...selected, seat, pairSeat]);
    }
  };

  const getSeatClass = (seat) => {
    if (BOOKED_SEATS.includes(seat)) return "seat booked";
    if (selected.includes(seat)) return "seat selected";
    if (COUPLE_SEATS.includes(seat)) return "seat couple";
    if (VIP_SEATS.includes(seat)) return "seat vip";
    return "seat";
  };

  const COUNTDOWN_TIME = 5 * 60;
  const [timeleft, setTimeLeft] = useState(COUNTDOWN_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSelected([]);
          alert("Hết thời gian giữ ghế! Vui lòng chọn lại");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (t) => {
    const m = String(Math.floor(t / 60)).padStart(2, "0");
    const s = String(t % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="seat-wrapper">
      <h2>Phòng chiếu số 13</h2>

      <div className="countdown">Thời gian giữ ghế: {formatTime(timeleft)}</div>

      <div className="screen">MÀN HÌNH</div>

      <div className="seat-container">
        {seatRows.map((row, idx) => (
          <div key={idx} className="seat-row">
            {row.seats.map((seat) => (
              <div
                key={seat}
                className={getSeatClass(seat)}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="info">
        <p>Ghế bạn đã chọn: {selected.join(", ") || "Chưa chọn"}</p>
        <p>Tổng tiền: {selected.length * 90000}đ</p>
      </div>
    </div>
  );
}
