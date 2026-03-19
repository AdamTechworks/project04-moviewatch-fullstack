import { useRef } from "react";
import MovieCard from "./MovieCard";


function MovieList({ movies, onAddToWatchlist, message, selectedMovieId }) {
  const ref = useRef(null);

  return (
    <div className="carousel">
      <button onClick={() => ref.current.scrollLeft -= 300}>◀</button>

    <div className="movie-list" ref={ref}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddToWatchlist={onAddToWatchlist}
          message={selectedMovieId === movie.id ? message : ""}
        />
      ))}
    </div>
    
    <button onClick={() => ref.current.scrollLeft += 300}>▶</button>
    </div>
  );
}

export default MovieList;