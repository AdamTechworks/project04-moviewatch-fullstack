import express from "express";
import {
  getWatchlist,
  addWatchlistItem,
  updateWatchlistItem,
  deleteWatchlistItem
} from "../services/watchlistService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const watchlist = await getWatchlist();
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch watchlist" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newItem = await addWatchlistItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to add watchlist item" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedItem = await updateWatchlistItem(req.params.id, req.body);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to update watchlist item" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteWatchlistItem(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete watchlist item" });
  }
});

export default router;