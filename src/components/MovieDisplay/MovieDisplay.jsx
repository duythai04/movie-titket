import React, { useState } from "react";
import DataMovie from "../../data/DataMovie";
import "./MovieDisplay.scss";
import { Link } from "react-router-dom";

function MovieDisplay() {
  const nowShowing = DataMovie.filter((movie) => movie.status === "now");
  const comingSoon = DataMovie.filter((movie) => movie.status === "coming");

  const [showAllnow, setShowAllnow] = useState(false);
  const [showAllComing, setShowAllComing] = useState(false);

  const renderMovies = (list) => (
    <div className="movie-container">
      {list.map((item, index) => (
        <div key={index} className="movie-wrapper">
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
        <div>
          {!showAllnow && (
            <button onClick={() => setShowAllnow(true)}>Xem thêm</button>
          )}
        </div>
      </div>

      <div className="title">PHIM SẮP CHIẾU</div>
      {renderMovies(showAllComing ? comingSoon : comingSoon.slice(0, 5))}

      <div className="more">
        <div>
          {!showAllComing && (
            <button onClick={() => setShowAllComing(true)}>Xem thêm</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDisplay;
