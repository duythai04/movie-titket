import { Router } from "express";
import * as UseController from "../controllers/movie.controller.js";

const router = Router();

router.get("/", UseController.getMovies);

router.get("/:movie_id", UseController.getMovieId);

export default router;
