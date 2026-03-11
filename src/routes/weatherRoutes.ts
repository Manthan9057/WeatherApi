import express from "express";
import { fetchweather } from "../controllers/weatherController";

const router = express.Router();

router.get('/weather/:city', fetchweather);

export default router;