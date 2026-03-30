import { useEffect, useState } from "react";
import { getMovies } from "../services/api";
import MovieList from "../components/MovieList";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        console.error("Failed to load movies", err);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  useEffect(() => {
      if (movies.length === 0) return;

      const interval = setInterval(() => {
        setFeaturedIndex((prev) => (prev + 1) % movies.length);
      }, 6000);

      return () => clearInterval(interval);
    }, [movies]);

  useEffect(() => {
  if (movies.length === 0) return;

    function shuffleMovies() {
      const shuffled = [...movies]
        .sort(() => 0.5 - Math.random())
        .slice(0, 9);

      setRecommendedMovies(shuffled);
    }

  shuffleMovies();

  const interval = setInterval(shuffleMovies, 10000);

  return () => clearInterval(interval);
}, [movies]);


  const featuredMovie = movies[featuredIndex];

  const trendingMovies = movies.slice(0, 6);

  return (
    <main>
      {featuredMovie && (
          <section key={featuredMovie.id} className="hero">
          <div className="hero-content">
          <div className="hero-text">
          <h1>{featuredMovie.title}</h1>
          <p>{featuredMovie.review}</p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/movies")}>
              Browse Movies
            </button>

            <button onClick={() => navigate("/watchlist")}>
              My Watchlist
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={featuredMovie.poster}
            alt={featuredMovie.title}
            className="hero-image"
            onClick={() => navigate("/movies")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      </section>
      )}

      {!loading && (
        <section className="home-row">
          <h2>Trending Now</h2>
          <MovieList movies={trendingMovies} />
        </section>
      )}

      {!loading && (
       <section className="home-row">
       <h2>Recommended for You</h2>

      <div className="recommended-row">
        {recommendedMovies.map((movie) => (
          <div key={movie.id} className="recommended-card">
          <img
            src={movie.poster}
            alt={movie.title}
            className="recommended-poster"
            onClick={() => navigate("/movies")}
          />
            <h3>{movie.title}</h3>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Rating:</strong> {movie.rating}/10</p>
      </div>
      ))}
    </div>
  </section>
  )}

      <section className="home-cta">
        <h2>Start building your watchlist</h2>
        <p>Browse movies and save your favorites.</p>
        <button onClick={() => navigate("/movies")}>
          Browse Movies
        </button>
      </section>
    </main>
  );
}

export default Home;