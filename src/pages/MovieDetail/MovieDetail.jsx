import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataMovie from "../../data/DataMovie";
import "./MovieDetail.scss";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = DataMovie.find((m) => m.movie_id === id);

  if (!movie) {
    return <div>Phim không tồn tại</div>;
  }

  return (
    <div className="movie-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Quay lại
      </button>

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
            <strong>Diễn viên:</strong>
            {movie.cast.map((actor) => actor.actor_name).join(", ")}
          </p>
          <p>
            <strong>Thời lượng:</strong> {movie.duration_mins} phút
          </p>
          <p>
            <strong>Mô tả:</strong> {movie.synopsis}
          </p>
          <div className="trailer-section">
            <h3>Trailer</h3>
            {movie.trailer_url.includes("youtube.com") ||
            movie.trailer_url.includes("youtu.be") ? (
              <iframe
                width="100%"
                height="400px"
                src={movie.trailer_url.replace("watch?v=", "embed/")}
                title={movie.title_vi}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls autoPlay>
                <source src={movie.trailer_url} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
