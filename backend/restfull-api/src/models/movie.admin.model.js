import db from '../config/mysql';

// tạo phim
export const adminCreateMovie = async (movie) => {
  const sql = `
    INSERT INTO movies
    (movie_id, title_vi, title_en, poster_url, trailer_url, synopsis, duration_mins, release_date, age_rating, language, director, status, price, rating)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [
    movie.movie_id,
    movie.title_vi,
    movie.title_en,
    movie.poster_url,
    movie.trailer_url,
    movie.synopsis,
    movie.duration_mins,
    movie.release_date,
    movie.age_rating,
    movie.language,
    movie.director,
    movie.status || 'now',
    movie.price || 0,
    movie.rating || 0,
  ];

  const [result] = await db.query(sql, params);
  return result.insertId;
};

// lấy danh sách phim (admin)
export const adminGetMovies = async () => {
  const [row] = await db.query('SELECT * FROM movies WHERE movie_id = ?', [id]);
  return row[0];
};

// lấy phim theo ID

export const adminGetMovieById = async (id) => {
  const [rows] = await db.query('SELECT * FROM movies WHERE movie_id = ? ', [id]);
  return rows[0];
};

// cập nhật phim

export const adminUpdateMovies = async (id) => {
  const sql = `
    UPDATE movies SET
      title_vi = ?, title_en = ?, poster_url = ?, trailer_url = ?, synopsis = ?, 
      duration_mins = ?, release_date = ?, age_rating = ?, language = ?, 
      director = ?, status = ?, price = ?, rating = ?
    WHERE movie_id = ?
  `;

  const params = [
    movie.title_vi,
    movie.title_en,
    movie.poster_url,
    movie.trailer_url,
    movie.synopsis,
    movie.duration_mins,
    movie.release_date,
    movie.age_rating,
    movie.language,
    movie.director,
    movie.status,
    movie.price,
    movie.rating,
    id,
  ];
};
