import React from "react";
import DataMovie from "./DataMovie";
import "./MovieList.scss";

function MovieList() {
  const firstFiveMovies = DataMovie.slice(0, 5);


  return (
    <div className="movie-section">
      <div className="tile">PHIM ĐANG CHIẾU</div>

      <div className="movie-container">
        {firstFiveMovies.map((item, index) => (
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

      <div className="more">
        <button>Xem thêm</button>
      </div>
    </div>
  );
}

export default MovieList;
