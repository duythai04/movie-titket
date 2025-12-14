import express from 'express';
import { getFoodCombos } from "../controllers/foodcombo.controller.js";


const router = express.Router();

router.get('/', getFoodCombos);

export default router;

