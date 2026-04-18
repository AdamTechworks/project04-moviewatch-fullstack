import express from "express";
import cors from "cors";
import moviesRoutes from "./routes/moviesRoutes.js";
import watchlistRoutes from "./routes/watchlistRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "API is running" });
});

app.use("/api/movies", moviesRoutes);
app.use("/api/watchlist", watchlistRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;