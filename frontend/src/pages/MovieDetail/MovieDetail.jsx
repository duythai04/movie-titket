import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';
import SeatSelector from '../../components/SeatSelector/SeatSelector';
import './MovieDetail.scss';

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [showtimes, setShowtimes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedShowtimeId, setSelectedShowtimeId] = useState(null);

  const DESCRIPTION_LIMIT = 200;

  /* fecth movies  */
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axiosClient.get(`/movies/${id}`);
        setMovie(res.data);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  /* fecth showtimes */
  useEffect(() => {
    const fetchShowtimes = async () => {
      const res = await axiosClient.get(`/api/showtimes/movie/${id}`);
      setShowtimes(res.data);
    };
    fetchShowtimes();
  }, [id]);

  /* group showtimes */
  const showtimeByDate = showtimes.reduce((acc, s) => {
    if (!acc[s.show_date]) acc[s.show_date] = [];
    acc[s.show_date].push({
      showtime_id: s.showtime_id,
      time: s.show_time.slice(0, 5),
    });
    return acc;
  }, {});

  const allDates = Object.keys(showtimeByDate).sort();

  useEffect(() => {
    if (allDates.length && !selectedDate) {
      setSelectedDate(allDates[0]);
    }
  }, [allDates, selectedDate]);

  if (loading) return <div className="loading">Đang tải...</div>;
  if (!movie) return <div>Phim không tồn tại</div>;

  const reviews = movie.reviews || [];
  const avgRating =
    reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;

  const shortDesc =
    movie.synopsis?.length > DESCRIPTION_LIMIT
      ? movie.synopsis.slice(0, DESCRIPTION_LIMIT) + '...'
      : movie.synopsis;

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes('embed')) return url;
    if (url.includes('watch?v=')) return url.replace('watch?v=', 'embed/');
    if (url.includes('youtu.be')) {
      const id = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    return null;
  };

  const trailerEmbed = getYoutubeEmbedUrl(movie.trailer_url);

  return (
    <div className="movie-detail">
      {/* hero */}
      <section className="hero" style={{ backgroundImage: `url(${movie.banner_url})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <img className="hero-poster" src={movie.poster_url} alt={movie.title_vi} />

            <div className="hero-info">
              <h1>{movie.title_vi}</h1>

              <div className="meta">
                <span>{movie.duration_mins} phút</span>
                <span>{movie.genres?.join(', ')}</span>
              </div>

              <div className="description">
                <h2>Nội dung phim</h2>
                <p>{showFullDesc ? movie.synopsis : shortDesc}</p>

                {movie.synopsis?.length > DESCRIPTION_LIMIT && (
                  <span className="toggle" onClick={() => setShowFullDesc(!showFullDesc)}>
                    {showFullDesc ? 'Thu gọn' : 'Xem thêm'}
                  </span>
                )}
              </div>

              <div className="rating">
                <span>Đánh giá: </span> <span>{avgRating.toFixed(1)}/10</span>
              </div>

              <button className="trailer-btn" onClick={() => setShowTrailer(!showTrailer)}>
                {showTrailer ? 'Ẩn trailer' : 'Trailer'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* trailer*/}
      {showTrailer && (
        <div className="trailer-modal">
          {trailerEmbed ? (
            <iframe src={trailerEmbed} title="Trailer" allowFullScreen></iframe>
          ) : (
            <video controls autoPlay>
              <source src={movie.trailer_url} type="video/mp4" />
            </video>
          )}
        </div>
      )}

      {/* showtimes  */}
      <div className="showtimes-wrapper">
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
                {new Date(date).toLocaleDateString('vi-VN', { weekday: 'long' })}
              </div>
              <div className="day">
                {new Date(date).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' })}
              </div>
            </div>
          ))}
        </div>

        <div className="time-list">
          {selectedDate &&
            showtimeByDate[selectedDate]?.map((item) => (
              <button
                key={item.showtime_id}
                className={`time-btn ${selectedShowtimeId === item.showtime_id ? 'active' : ''}`}
                onClick={() => setSelectedShowtimeId(item.showtime_id)}
              >
                {item.time}
              </button>
            ))}
        </div>
      </div>

      {selectedShowtimeId && (
        <SeatSelector showtime_id={selectedShowtimeId} movie_id={movie.movie_id} />
      )}
    </div>
  );
}

export default MovieDetail;
