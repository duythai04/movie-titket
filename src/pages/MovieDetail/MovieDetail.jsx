import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataMovie from "../../data/DataMovie";
import "./MovieDetail.scss";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = DataMovie.find((m) => m.movie_id === id);

  const [showFullDesc, setShowFullDesc] = useState(false);

  const [showTrailer, setShowTrailer] = useState(false);

  const DESCRIPTION_LIMIT = 200;

  if (!movie) {
    return <div>Phim không tồn tại</div>;
  }

  const shortDescription =
    movie.synopsis.length > DESCRIPTION_LIMIT
      ? movie.synopsis.slice(0, DESCRIPTION_LIMIT) + "..."
      : movie.synopsis;

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
              {showFullDesc ? "Thu gọn ▲" : "Xem thêm ▼"}
            </button>
          )}

          <div className="trailer-section">
            <button
              className="trailer-btn"
              onClick={() => setShowTrailer(!showTrailer)}
            >
              {showTrailer ? "Ẩn trailer ▲" : "Trailer ▼"}
            </button>

            {showTrailer && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
