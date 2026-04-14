import { useState } from "react";
import MovieList from "../components/MovieList";
import { deleteFromWatchlist, updateWatchlistItem } from "../services/api";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";


function Watchlist({ watchlist, setWatchlist, watchlistError }) {
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [editingMovieId, setEditingMovieId] = useState(null);
  const [editForm, setEditForm] = useState({
    status: "",
    personalRating: ""
  });


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

    function handleEditClick(movie) {
      setEditingMovieId(movie.id);
      setEditForm({
        status: movie.status || "Want to Watch",
        personalRating: movie.personalRating || movie.rating
      });
    }

    function handleEditChange(e) {
      const { name, value } = e.target;
      setEditForm((prev) => ({
        ...prev,
        [name]: value
      }));
    }

    async function handleSaveEdit(movieId) {
      try {
        const updatedMovie = await updateWatchlistItem(movieId, {
          status: editForm.status,
          personalRating: Number(editForm.personalRating)
        });

        setWatchlist((prev) =>
          prev.map((movie) =>
            movie.id === movieId ? updatedMovie : movie
          )
        );

        setEditingMovieId(null);
        setMessage("Watchlist item updated");
      } catch (err) {
        console.error("Failed to update movie", err);
        setMessage("Failed to update movie");
      }
    }

    function handleCancelEdit() {
      setEditingMovieId(null);
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
      <h1>Watchlist</h1>
      <p>Manage the movies you want to watch.</p>

        {watchlistError && <p>{watchlistError}</p>}

      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSelect={setSearchTerm}
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
                onEdit={handleEditClick}
                onSaveEdit={handleSaveEdit}
                onCancelEdit={handleCancelEdit}
                editingMovieId={editingMovieId}
                editForm={editForm}
                onEditChange={handleEditChange}
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