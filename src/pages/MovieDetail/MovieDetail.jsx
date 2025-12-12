import React, { useState, useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import SeatSelector from '../../components/SeatSelector/SeatSelector';
import './MovieDetail.scss';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedShowtimeId, setSelectedShowtimeId] = useState(null);

  const DESCRIPTION_LIMIT = 200;

  // call API
  useEffect(() => {
    if (!id) return;

    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.log('Lỗi khi lấy dữ liệu:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  // CHUYỂN DỮ LIỆU SHOWTIME
  const allShowtimes =
    movie?.showtimes?.reduce((acc, s) => {
      const date = new Date(s.show_date).toISOString().split('T')[0];

      if (!acc[date]) acc[date] = [];

      acc[date].push({
        time: s.show_time.slice(0, 5),
        showtime_id: s.showtime_id,
      });

      return acc;
    }, {}) || {};

  // Tất cả ngày
  const allDates = Object.keys(allShowtimes).sort();

  // tự động chọn ngày đầu tiên
  useEffect(() => {
    if (allDates.length > 0 && !selectedDate) {
      setSelectedDate(allDates[0]);
    }
  }, [allDates, selectedDate]);

  // tính rating
  const reviews = movie?.reviews || [];
  const avgRating = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;

  const shortDescription =
    movie?.synopsis?.length > DESCRIPTION_LIMIT
      ? movie.synopsis.slice(0, DESCRIPTION_LIMIT) + '...'
      : movie?.synopsis;

  // rende UI
  if (loading) return <div>Đang tải...</div>;
  if (!movie) return <div>Phim không tồn tại</div>;

  return (
    <div className="movie-detail">
      {/* Movie Info */}
      <div className="movie-info">
        <img src={movie.poster_url} alt={movie.title_vi} className="movie-poster" />

        <div className="movie-text">
          <h1>{movie.title_vi}</h1>

          <p>
            <strong>Thể loại:</strong> {movie.genres?.join(', ') || 'Đang cập nhật'}
          </p>

          <p>
            <strong>Đạo diễn:</strong> {movie.director}
          </p>

          <p>
            <strong>Diễn viên:</strong>{' '}
            {movie.cast?.map((a) => a.actor_name).join(', ') || 'Đang cập nhật'}
          </p>

          <p>
            <strong>Thời lượng:</strong> {movie.duration_mins} phút
          </p>

          <p className="description">
            <strong>Mô tả:</strong> {showFullDesc ? movie.synopsis : shortDescription}
          </p>

          {movie.synopsis?.length > DESCRIPTION_LIMIT && (
            <button className="toggle-desc-btn" onClick={() => setShowFullDesc(!showFullDesc)}>
              {showFullDesc ? 'Thu gọn' : 'Xem thêm'}
            </button>
          )}

          <div className="review-title">
            <span>Đánh giá:</span>
            <p>
              ★ {avgRating.toFixed(1)}/10 ({reviews.length} đánh giá)
            </p>
          </div>

          {/* Trailer */}
          <div className="section-btn">
            <button className="trailer-btn" onClick={() => setShowTrailer(!showTrailer)}>
              <FaYoutube /> {showTrailer ? 'Ẩn trailer' : 'Trailer'}
            </button>

            {showTrailer &&
              (movie.trailer_url.includes('youtube') ? (
                <iframe
                  width="100%"
                  height="400"
                  src={movie.trailer_url.replace('watch?v=', 'embed/') + '?autoplay=1'}
                  title={movie.title_vi}
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls autoPlay muted>
                  <source src={movie.trailer_url} type="video/mp4" />
                </video>
              ))}
          </div>
        </div>
      </div>

      {/* Showtime */}
      <div className="showtimes-wrapper">
        {/* DANH SÁCH NGÀY */}
        <div className="date-list">
          {allDates.map((date) => (
            <div
              key={date}
              className={`date-item ${selectedDate === date ? 'active' : ''}`}
              onClick={() => {
                setSelectedDate(date);
                setSelectedShowtimeId(null);
              }}
            >
              <div className="weekday">
                {new Date(date).toLocaleDateString('vi-VN', {
                  weekday: 'long',
                })}
              </div>
              <div className="day">
                {new Date(date).toLocaleDateString('vi-VN', {
                  day: '2-digit',
                  month: '2-digit',
                })}
              </div>
            </div>
          ))}
        </div>

        {/* DANH SÁCH GIỜ */}
        <div className="time-list">
          {selectedDate &&
            allShowtimes[selectedDate]?.map((item, i) => (
              <button
                key={i}
                className={`time-btn ${selectedShowtimeId === item.showtime_id ? 'active' : ''}`}
                onClick={() => setSelectedShowtimeId(item.showtime_id)}
              >
                {item.time}
              </button>
            ))}
        </div>
      </div>

      {/* Gửi showtime_id xuống chọn ghế */}
      <SeatSelector showtime_id={selectedShowtimeId} movie_id={movie.movie_id} />
    </div>
  );
}

export default MovieDetail;
