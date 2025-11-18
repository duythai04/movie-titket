import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ movie, selectedDate }) => {
  const todayShowtimes = movie.cinemas
    .flatMap((cinema) =>
      (cinema.showtimes[selectedDate] || []).map((time) => ({
        time,
        cinema: cinema.cinema_name || cinema.cinema_id,
      }))
    )
    .sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="movie-card">
      <img src={movie.poster_url} alt={movie.title_vi} className="poster" />

      <div className="info">
        <div className="top-line">
          <span className="genre">{movie.genres.join(", ")}</span>
          <span className="duration">{movie.duration_mins} phút</span>
          <span className="format">2D</span>
        </div>

        <h3 className="title">{movie.title_vi}</h3>

        <div className="details">
          <p>
            Khởi chiếu:{" "}
            {new Date(movie.release_date).toLocaleDateString("vi-VN")}
          </p>
          <p className={`rating ${movie.age_rating.toLowerCase()}`}>
            {movie.age_rating} - Phim được phép phổ biến đến người xem từ{" "}
            {movie.age_rating.replace("T", "")} tuổi
          </p>
        </div>

        {todayShowtimes.length > 0 ? (
          <div className="showtimes">
            <span className="label">Lịch chiếu hôm nay</span>
            <div className="times">
              {todayShowtimes.map((slot, i) => (
                <button key={i} className="time-btn" title={slot.cinema}>
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="no-showtime">
            Không có suất chiếu ngày{" "}
            {selectedDate.split("-").reverse().join("/")}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
