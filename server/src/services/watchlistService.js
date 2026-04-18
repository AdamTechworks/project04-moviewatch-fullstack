import pool from "../db/db.js";

export async function getWatchlist() {
  const result = await pool.query("SELECT * FROM watchlist ORDER BY id");
  return result.rows;
}

export async function addWatchlistItem(item) {
  const { title, genre, director, year, review, rating, poster, status, personalRating } = item;

  const result = await pool.query(
    `
    INSERT INTO watchlist
    (title, genre, director, year, review, rating, poster, status, personal_rating)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
    `,
    [title, genre, director, year, review, rating, poster, status || "Want to Watch", personalRating || null]
  );

  return result.rows[0];
}

export async function updateWatchlistItem(id, updates) {
  const { status, personalRating } = updates;

  const result = await pool.query(
    `
    UPDATE watchlist
    SET status = $1, personal_rating = $2
    WHERE id = $3
    RETURNING *
    `,
    [status, personalRating, id]
  );

  return result.rows[0];
}

export async function deleteWatchlistItem(id) {
  await pool.query("DELETE FROM watchlist WHERE id = $1", [id]);
}