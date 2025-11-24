import { Router } from "express";
import {
  getMovies,
  getMovieDetailController,
} from "../controllers/movie.controller.js";

const router = Router();

router.get("/", getMovies);
router.get("/:movie_id", getMovieDetailController);

export default router;
