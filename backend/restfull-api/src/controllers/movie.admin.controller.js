import {
  adminCreateMovie,
  adminGetMovieById,
  adminGetMovies,
  adminUpdateMovies,
  adminDeleteMovie,
} from '~/models/movie.admin.model';


export const createMovieCtrl = async (req, res) => {
    try {
        await adminCreateMovie(req.body);
        res.json({message: "Tạo phim thành công" })
        
    } catch (err) {
        res.status(500).json({message: "Lỗi server", error: err.message})
        
    };
};

export const getMovieCtrl = async (req, res) => {
    res.json(await adminGetMovies());
};

export const getMovieByIdCtrl = async (req , res) =>{
    const movie = await adminGetMovieById(req.params.id);
    if (!movie) return res.status(404).json({message: "không tìm thấy phim"});
    res.json(movie);
};

export const updateMovieCtrl = async (req, res) => {
  await adminUpdateMovies(req.params.id, req.body);
  res.json({ message: "Cập nhật thành công" });
};

export const deleteMovieCtrl = async (req, res) => {
  await adminDeleteMovie(req.params.id);
  res.json({ message: "Xóa phim thành công" });
};