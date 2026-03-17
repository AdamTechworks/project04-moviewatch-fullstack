import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { getMovies, addToWatchlist } from "../services/api";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        setError("Could not load movies.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    

    loadMovies();
  }, []);


  async function handleAddToWatchlist(movie) {
    try {
      await addToWatchlist(movie);
      alert(`${movie.title} added to watchlist`);
    } catch (err) {
      console.error(err);
      alert("Could not add movie to watchlist.");
    }
  }

  return (
    <main>
      <h1>Browse Movies</h1>
      <p>Explore movies and add them to your watchlist.</p>
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}

     {!loading && !error && (
        <MovieList movies={movies} onAddToWatchlist={handleAddToWatchlist} />
      )}
    </main>
  );
}

export default Movies;