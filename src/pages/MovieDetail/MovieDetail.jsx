import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DataMovie from "../../data/DataMovie";
import SeatSelector from "../../components/SeatSelector/SeatSelector";
import "./MovieDetail.scss";

function MovieDetail() {
  const { id } = useParams();
  const movie = DataMovie.find((m) => m.movie_id === id);

  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const DESCRIPTION_LIMIT = 200;

  if (!movie) {
    return <div>Phim không tồn tại</div>;
  }

  const allShowtimes = movie.cinemas.reduce((acc, cinema) => {
    Object.entries(cinema.showtimes).forEach(([date, times]) => {
      if (!acc[date]) acc[date] = [];
      acc[date].push(...times);
    });
    return acc;
  }, {});

  const allDates = Object.keys(allShowtimes).sort();

  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (allDates.length > 0 && !selectedDate) {
      setSelectedDate(allDates[0]);
    }
  }, [allDates, selectedDate]);

  /*Tính điểm đánh giá từ review*/
  const avgRating =
    movie.reviews.reduce((sum, r) => sum + r.rating, 0) / movie.reviews.length;

  const shortDescription =
    movie.synopsis.length > DESCRIPTION_LIMIT
      ? movie.synopsis.slice(0, DESCRIPTION_LIMIT) + "..."
      : movie.synopsis;

  return (
    <div className="movie-detail">
      <div className="movie-info">
        <img
          src={movie.poster_url}
          alt={movie.title_vi}
          className="movie-poster"
        />

        <div className="movie-text">
          <h1>{movie.title_vi}</h1>

          <p>
            <strong>Thể loại:</strong> {movie.genres.join(", ")}
          </p>
          <p>
            <strong>Đạo diễn:</strong> {movie.director}
          </p>
          <p>
            <strong>Diễn viên:</strong>{" "}
            {movie.cast.map((actor) => actor.actor_name).join(", ")}
          </p>
          <p>
            <strong>Thời lượng:</strong> {movie.duration_mins} phút
          </p>

          <p className="description">
            <strong>Mô tả:</strong>{" "}
            {showFullDesc ? movie.synopsis : shortDescription}
          </p>

          {movie.synopsis.length > DESCRIPTION_LIMIT && (
            <button
              className="toggle-desc-btn"
              onClick={() => setShowFullDesc(!showFullDesc)}
            >
              {showFullDesc ? "Thu gọn" : "Xem thêm"}
            </button>
          )}

          <div className="review-title">
            <span>Đánh giá:</span>
            <p>
              ★ {avgRating.toFixed(1)}/10 ( {movie.reviews.length} đánh giá)
            </p>
          </div>

          <div className="section-btn">
            <div className="trailer-section">
              <button
                className="trailer-btn"
                onClick={() => setShowTrailer(!showTrailer)}
              >
                <span>
                  <FaYoutube />
                </span>
                {showTrailer ? "Ẩn trailer" : "Trailer"}
              </button>

              {showTrailer && (
                <>
                  {movie.trailer_url.includes("youtube") ? (
                    <iframe
                      width="100%"
                      height="400"
                      src={
                        movie.trailer_url.replace("watch?v=", "embed/") +
                        "?autoplay=1"
                      }
                      title={movie.title_vi}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video controls autoPlay muted>
                      <source src={movie.trailer_url} type="video/mp4" />
                    </video>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="reviews">
          {movie.reviews.length === 0 ? (
            <p>Chưa có đánh giá nào</p>
          ) : (
            movie.reviews.map((rev, index) => (
              <div className="review-item" key={index}>
                <p className="review-user">
                  <strong>{rev.user}</strong>
                  <span>⭐ {rev.rating}/10</span>
                </p>
                <p className="review-comment">{rev.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="showtimes-wrapper">
        <div className="date-list">
          {allDates.map((date) => (
            <div
              key={date}
              className={`date-item ${selectedDate === date ? "active" : ""}`}
              onClick={() => setSelectedDate(date)}
            >
              <div className="weekday">
                {new Date(date).toLocaleDateString("vi-VN", {
                  weekday: "long",
                })}
              </div>
              <div className="day">
                {new Date(date).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="time-list">
          {selectedDate &&
            allShowtimes[selectedDate]?.map((time, i) => (
              <button key={i} className="time-btn">
                {time}
              </button>
            ))}
        </div>
      </div>
      <SeatSelector />
    </div>
  );
}

export default MovieDetail;
