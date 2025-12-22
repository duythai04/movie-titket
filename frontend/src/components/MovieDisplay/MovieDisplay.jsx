import React, { useState, useEffect } from 'react';
import './MovieDisplay.scss';
import { Link } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

function MovieDisplay() {
  const [movies, setMovies] = useState([]);
  const [showAllnow, setShowAllnow] = useState(false);
  const [showAllComing, setShowAllComing] = useState(false);

  // Gọi API backend
  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        const res = await axiosClient.get('/movies', {
          signal: controller.signal,
        });
        setMovies(res.data);
      } catch (error) {
        if (error.name !== 'CanceledError') {
          console.error('Fetch movies error:', error);
        }
      }
    };

    fetchMovies();

    return () => {
      controller.abort(); // cleanup khi unmount
    };
  }, []);

  const nowShowing = movies.filter((movie) => movie.status === 'now');
  const comingSoon = movies.filter((movie) => movie.status === 'soon');

  const renderMovies = (list) => (
    <div className="movie-container">
      {list.map((item) => (
        <div key={item.movie_id} className="movie-wrapper">
          <div className="movie-item">
            <div className="movie-img">
              <img src={item.poster_url} alt={item.title_vi} />

              <div className="overlay">
                <button className="btn-trailer">Xem trailer</button>

                <Link to={`/movies/${item.movie_id}`}>
                  <button className="btn-ticket">Đặt vé</button>
                </Link>
              </div>
            </div>

            <div className="movie-name">{item.title_vi}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="movie-section">
      <div className="title">PHIM ĐANG CHIẾU</div>
      {renderMovies(showAllnow ? nowShowing : nowShowing.slice(0, 5))}

      <div className="more">
        {!showAllnow && <button onClick={() => setShowAllnow(true)}>Xem thêm</button>}
      </div>

      <div className="title">PHIM SẮP CHIẾU</div>
      {renderMovies(showAllComing ? comingSoon : comingSoon.slice(0, 5))}

      <div className="more">
        {!showAllComing && <button onClick={() => setShowAllComing(true)}>Xem thêm</button>}
      </div>
    </div>
  );
}

export default MovieDisplay;
