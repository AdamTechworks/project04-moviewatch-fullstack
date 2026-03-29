import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie, onAddToWatchlist, onRemove, message }) {

  const navigate = useNavigate();

  return (
    <div className="card">

         <div
            className="movie-poster"
            onClick={() =>
              onAddToWatchlist
                ? onAddToWatchlist(movie)
                : navigate("/movies")
              }
              style={{
                backgroundImage: `url(${movie.poster})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer"
              }}
            >
              
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