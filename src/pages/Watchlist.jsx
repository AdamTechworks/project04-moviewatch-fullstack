import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { getWatchlist, deleteFromWatchlist } from "../services/api";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";


function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);


  useEffect(() => {
    async function loadWatchlist() {
      try {
        const data = await getWatchlist();
        setWatchlist(data);
      } catch (err) {
        console.error("Failed to load watchlist", err);
      }
    }
  
  
        loadWatchlist();
      },
    []);

  async function handleRemove(movieId) {
  try {
      setSelectedMovieId(movieId);
      setMessage("Movie removed from watchlist");

     setTimeout(async () => {
      try {
        await deleteFromWatchlist(movieId);

        setWatchlist((prev) =>
          prev.filter((movie) => movie.id !== movieId)
        );

        setMessage("");
        setSelectedMovieId(null);
      } catch (err) {
        console.error("Failed to delete movie", err);
        setMessage("Failed to remove movie");
      }
    }, 800);
  } catch (err) {
    console.error("Failed to delete movie", err);
    setMessage("Failed to remove movie");
  }
}

  const genres = ["Sci-Fi", "Action", "Drama", "Comedy", "Horror", "Fantasy"];

  const filteredWatchlist = watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.review.toLowerCase().includes(searchTerm.toLowerCase())
);

const groupedWatchlist = genres.map((genre) => {
  const genreMovies = filteredWatchlist.filter(
    (movie) => movie.genre === genre
  );

  const chunks = [];
  for (let i = 0; i < genreMovies.length; i += 6) {
    chunks.push(genreMovies.slice(i, i + 6));
  }

  return {
    genre,
    chunks
  };
});

  return (
    <main>
      <h1>My Watchlist</h1>

      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search watchlist..."
        suggestions={filteredWatchlist}
  />


      {watchlist.length === 0 ? (
        <EmptyState message="No movies in your watchlist yet." />

        ) : (
       groupedWatchlist.map(({ genre, chunks }) => {
        if (chunks.length === 0) return null;

        return (
          <section key={genre} className="genre-row">
            <h2>{genre}</h2>

            {chunks.map((group, index) => (
              <MovieList
                key={index}
                movies={group}
                onRemove={handleRemove}
                message={message}
                selectedMovieId={selectedMovieId}
              />
             ))}
          </section>
          );
        })
      )}
    </main>
  );
}
  
export default Watchlist;