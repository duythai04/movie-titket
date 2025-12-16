import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie = {}, selectedDate = '' }) => {
  if (!movie || Object.keys(movie).length === 0) return null;

  const cinemas = movie.cinemas || [];

  const todayShowtimes = cinemas
    .flatMap((cinema) =>
      (cinema.showtimes?.[selectedDate] || []).map((time) => ({
        time,
        cinema: cinema.cinema_name || cinema.cinema_id || 'Unknown',
      })),
    )
    .sort((a, b) => String(a.time).localeCompare(String(b.time)));

  const genresText = (movie.genres || []).join(', ');
  const durationText = movie.duration_mins ?? 'N/A';
  const poster = movie.poster_url || '';
  const title = movie.title_vi || movie.title || 'Untitled';
  const releaseDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString('vi-VN')
    : 'N/A';
  const ageRating = movie.age_rating || 'T0';
  const ageClass = String(ageRating).toLowerCase();

  const displayDate = selectedDate ? selectedDate.split('-').reverse().join('/') : '';

  return (
    <Link
      to={`/movies/${movie.movie_id}`}
      className="movie-card"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <img src={poster} alt={title} className="poster" />

      <div className="info">
        <div className="top-line">
          <span className="genre">{genresText}</span>
          <span className="duration">{durationText} phút</span>
          <span className="format">2D</span>
        </div>

        <h3 className="title">{title}</h3>

        <div className="details">
          <p>Khởi chiếu: {releaseDate}</p>
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
          <div className="no-showtime"></div>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
