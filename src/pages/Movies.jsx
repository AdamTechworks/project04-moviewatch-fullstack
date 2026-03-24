import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { getMovies, addToWatchlist, getWatchlist } from "../services/api";
import SearchBar from "../components/SearchBar";
import LoadingMessage from "../components/LoadingMessage";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

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
      const watchlist = await getWatchlist();

      const alreadyAdded = watchlist.some(
        (item) => item.title === movie.title
      );

      setSelectedMovieId(movie.id);

      if (alreadyAdded) {
        setMessage(`${movie.title} is already in your watchlist.`);
        return;
      }

      await addToWatchlist(movie);
      setMessage(`${movie.title} added to watchlist`);
    } catch (err) {
      console.error(err);
      setSelectedMovieId(movie.id);
      setMessage("Could not add movie to watchlist.");
    }
  }

    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.review.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <h1>Browse Movies</h1>
      <p>Explore movies and add them to your watchlist.</p>

      {loading && <LoadingMessage text="Loading movies..." />}

      {error && <p>{error}</p>}

      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
        suggestions={filteredMovies}
   />
      
     {!loading && !error && (
         <>
      {["Sci-Fi", "Action", "Drama", "Comedy", "Horror", "Fantasy"].map((genre) => {
        const genreMovies = filteredMovies.filter((movie) => movie.genre === genre);

        if (genreMovies.length === 0) return null;

        return (
        <section key={genre} className="genre-row">
          <h2>{genre}</h2>
            <MovieList
              movies={genreMovies}
              onAddToWatchlist={handleAddToWatchlist}
              message={message}
              selectedMovieId={selectedMovieId}
            />
          </section>
           );
        })}
       </>
      )}
    </main>
  );
}

export default Movies;