import { useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';
import { Link } from 'react-router-dom';
import './SearchMovie.scss';

const SearchMovie = ({ keyword = '', setKeyword, hideInput = false, onClose }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        setLoading(true);

        const res = await axiosClient.get('/search', {
          params: keyword.trim() ? { q: keyword } : {},
        });

        setMovies(res.data?.data || []);
      } catch (error) {
        console.error(error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [keyword]);

  return (
    <div className="search-movie">
      {/* INPUT */}
      {!hideInput && (
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Nhập phim bạn muốn tìm kiếm..."
            value={keyword}
            autoFocus
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      )}

      {/* STATE */}
      {loading && <p className="search-state">Đang tìm kiếm…</p>}

      {!loading && keyword && movies.length === 0 && (
        <p className="search-state empty">Không tìm thấy phim phù hợp</p>
      )}

      {/* RESULT */}
      {movies.length > 0 && (
        <div className="movie-list">
          {movies.map((movie) => (
            <div className="movie-item" key={movie.movie_id}>
              <img src={movie.poster_url} alt={movie.title_vi} />

              <div className="info">
                <h4>{movie.title_vi}</h4>
                <p>{movie.title_en}</p>

                <Link to={`/movies/${movie.movie_id}`} onClick={onClose}>
                  <span className="view-detail">Xem chi tiết →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
