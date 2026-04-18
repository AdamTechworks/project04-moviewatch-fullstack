import pool from "../db/db.js";

export async function testMoviesConnection() {
  const result = await pool.query("SELECT 1");
  return result.rows;
}

export async function getMovies() {
  const result = await pool.query("SELECT * FROM movies ORDER BY id");
  return result.rows;
}