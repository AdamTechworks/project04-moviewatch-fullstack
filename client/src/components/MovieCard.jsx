import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ 
  movie, 
  onAddToWatchlist, 
  onRemove, 
  onEdit,
  onSaveEdit,
  onCancelEdit,
  editingMovieId,
  editForm,
  onEditChange,
  message 
}) {

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
          </div>


        {message && <p className="success-message">{message}</p>}

        <h2>{movie.title}</h2>

        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Year:</strong> {movie.year}</p>

        <p>{movie.review}</p>

        {movie.personalRating ? (
          <p><strong>Your Rating:</strong> {movie.personalRating}/10</p>
        ) : (
          <p><strong>Rating:</strong> {movie.rating}/10</p>
        )}

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

        {onEdit && (
        <button onClick={() => onEdit(movie)}>
          Edit
        </button>
      )}

      {editingMovieId === movie.id && (
  <div className="edit-form">
    
    <label>
      Status:
      <select
        name="status"
        value={editForm.status}
        onChange={onEditChange}
      >
        <option value="Want to Watch">Want to Watch</option>
        <option value="Watching">Watching</option>
        <option value="Watched">Watched</option>
      </select>
    </label>

    <label>
      Personal Rating:
      <input
        type="number"
        name="personalRating"
        min="1"
        max="10"
        value={editForm.personalRating}
        onChange={onEditChange}
      />
    </label>

    <button onClick={() => onSaveEdit(movie.id)}>
      Save
    </button>

    <button onClick={onCancelEdit}>
      Cancel
    </button>

      </div>
    )}
    </div>
  );
}

export default MovieCard;