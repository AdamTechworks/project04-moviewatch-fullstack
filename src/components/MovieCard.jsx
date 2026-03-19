function MovieCard({ movie, onAddToWatchlist, onRemove, message }) {
  return (
    <div className="card">

        <div className="movie-poster">
        <div className="movie-poster-overlay">
          <span className="movie-poster-title">{movie.title}</span>
        </div>
        </div>

        {message && <p className="success-message">{message}</p>}

        <h2>{movie.title}</h2>

        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Year:</strong> {movie.year}</p>

        <p>{movie.review}</p>

        <p><strong>Rating:</strong> {movie.rating}/10</p>

        {onAddToWatchlist && (
        <button onClick={() => onAddToWatchlist(movie)}>
            Add to Watchlist
        </button>
        )}
        
        {onRemove && (
        <button className="remove-btn" onClick={() => onRemove(movie.id)}>
          Remove Movie
        </button>
      )}
    </div>
  );
}

export default MovieCard;