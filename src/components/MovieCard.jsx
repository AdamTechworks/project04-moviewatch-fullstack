function MovieCard({ movie }) {
  return (
    <div className="card">
      <h2>{movie.title}</h2>

      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Year:</strong> {movie.year}</p>

      <p>{movie.review}</p>

      <p><strong>Rating:</strong> {movie.rating}/10</p>

      <button>Add to Watchlist</button>
    </div>
  );
}

export default MovieCard;