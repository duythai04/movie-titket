import { getSearchMovie } from "../models/search.models.js";

export const searchMovie = async (req, res) => {
  try {
    const { q } = req.query;

    let movies;

    if (q && q.trim()) {
      movies = await getSearchMovie(q.trim());
    } else {
      movies = await getSearchMovie(); 
    }

    res.status(200).json({
      total: movies.length,
      data: movies,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Lỗi server',
    });
  }
};
