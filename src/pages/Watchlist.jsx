import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getWatchlist, deleteFromWatchlist } from "../services/api";


function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const [message, setMessage] = useState("");
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
  }, []);

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


  return (
    <main>
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>No movies in your watchlist yet.</p>
      ) : (
        <div className="watchlist-grid">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRemove={handleRemove}
              message={selectedMovieId === movie.id ? message : ""}
            />
          ))}
        </div>
        )}
    </main>
    );
  }
  
export default Watchlist;