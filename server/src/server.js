import dotenv from "dotenv";
import app from "./app.js";
import { testMoviesConnection } from "./services/moviesService.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  try {
    await testMoviesConnection();
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
});