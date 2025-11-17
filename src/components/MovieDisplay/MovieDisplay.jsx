import React from "react";
import DataMovie from "../../data/DataMovie";
import "./MovieDisplay.scss";
import { Link } from "react-router-dom";

function MovieList() {
  // Tách 2 danh sách
  const nowShowing = DataMovie.filter(movie => movie.status === "now");
  const comingSoon = DataMovie.filter(movie => movie.status === "coming");

  // Lấy 5 phim đầu
  const nowShowingFive = nowShowing.slice(0, 5);
  const comingSoonFive = comingSoon.slice(0, 5);

  // Hàm render
  const renderMovies = (list) => (
    <div className="movie-container">
      {list.map((item, index) => (
        <div key={index} className="movie-wrapper">
          <div className="movie-item">

            <div className="movie-img">
              <img src={item.poster_url} alt={item.title_vi} />

              <div className="overlay">
                <button className="btn-trailer">Xem trailer</button>
                <button className="btn-ticket">Đặt vé</button>
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

      {/* PHIM ĐANG CHIẾU */}
      <div className="title">PHIM ĐANG CHIẾU</div>
      {renderMovies(nowShowingFive)}

      <div className="more">
        <Link to="/movies/now">
          <button>Xem thêm</button>
        </Link>
      </div>

      {/* PHIM SẮP CHIẾU */}
      <div className="title">PHIM SẮP CHIẾU</div>
      {renderMovies(comingSoonFive)}

      <div className="more">
        <Link to="/movies/coming">
          <button>Xem thêm</button>
        </Link>
      </div>

    </div>
  );
}

export default MovieList;
