function Watchlist() {
  return (
    <main>
      <h1>My Watchlist</h1>

      <p>
        These are the movies you have saved to watch later.
      </p>

      <div className="card">
        <h2>The Dark Knight</h2>
        <p><strong>Genre:</strong> Action</p>
        <p>
          Batman faces the Joker in one of the most iconic superhero films ever made.
        </p>
      </div>

      <div className="card">
        <h2>Blade Runner 2049</h2>
        <p><strong>Genre:</strong> Sci-Fi</p>
        <p>
          A visually breathtaking continuation of the Blade Runner universe.
        </p>
      </div>
    </main>
  );
}

export default Watchlist;