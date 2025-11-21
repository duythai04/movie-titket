import { Router } from "express";

import * as MovieController from "../controllers/movie.controller.js";

const router = Router();

router.get("/", MovieController.getMovies);

export default router;
