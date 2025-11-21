import React, { useState, useEffect } from "react";
import "./MovieDisplay.scss";
import { Link } from "react-router-dom";

function MovieDisplay() {
  const [movies, setMovies] = useState([]);
  const [showAllnow, setShowAllnow] = useState(false);
  const [showAllComing, setShowAllComing] = useState(false);

  // Gọi API backend
  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  const nowShowing = movies.filter((movie) => movie.status === "now");
  const comingSoon = movies.filter((movie) => movie.status === "coming");

  const renderMovies = (list) => (
    <div className="movie-container">
      {list.map((item) => (
        <div key={item.movie_id} className="movie-wrapper">
          <div className="movie-item">
            <div className="movie-img">
              <img src={item.poster_url} alt={item.title_vi} />

              <div className="overlay">
                <button className="btn-trailer">Xem trailer</button>

                <Link to={`/movieDetail/${item.movie_id}`}>
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
        {!showAllnow && (
          <button onClick={() => setShowAllnow(true)}>Xem thêm</button>
        )}
      </div>

      <div className="title">PHIM SẮP CHIẾU</div>
      {renderMovies(showAllComing ? comingSoon : comingSoon.slice(0, 5))}

      <div className="more">
        {!showAllComing && (
          <button onClick={() => setShowAllComing(true)}>Xem thêm</button>
        )}
      </div>
    </div>
  );
}

export default MovieDisplay;
