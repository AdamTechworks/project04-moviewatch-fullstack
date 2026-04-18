import express from "express";
import { getMovies } from "../services/moviesService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const movies = await getMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
});

export default router;