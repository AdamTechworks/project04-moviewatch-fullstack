import MovieList from "../components/MovieList";

function Movies() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      genre: "Sci-Fi",
      director: "Christopher Nolan",
      year: 2014,
      review: "A visually stunning space epic.",
      rating: 9
    },
    {
      id: 2,
      title: "Inception",
      genre: "Sci-Fi / Thriller",
      director: "Christopher Nolan",
      year: 2010,
      review: "A mind-bending story about dreams within dreams.",
      rating: 8
    }
  ];

  return (
    <main>
      <h1>Movies</h1>

      <p>Explore movies and add them to your watchlist.</p>

      <MovieList movies={movies} />
    </main>
  );
}

export default Movies;