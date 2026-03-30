const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function getMovies() {
  const response = await fetch(`${API_URL}/movies`);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
}

export async function getWatchlist() {
  const response = await fetch(`${API_URL}/watchlist`);
  if (!response.ok) {
    throw new Error("Failed to fetch watchlist");
  }
  return response.json();
}

export async function addToWatchlist(movie) {
  const response = await fetch(`${API_URL}/watchlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  });

  if (!response.ok) {
    throw new Error("Failed to add movie to watchlist");
  }

  return response.json();
}

export async function deleteFromWatchlist(id) {
  const response = await fetch(`${API_URL}/watchlist/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Failed to delete movie");
  }

  return true;
}