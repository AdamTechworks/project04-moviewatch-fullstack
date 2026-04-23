const API_URL = import.meta.env.VITE_API_BASE_URL;

function normalizeWatchlistItem(item) {
  return {
    ...item,
    personalRating: item.personal_rating ?? item.personalRating
  };
}

export async function getMovies() {
  const response = await fetch(`${API_URL}/api/movies`);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
}

export async function getWatchlist() {
  const response = await fetch(`${API_URL}/api/watchlist`);
  if (!response.ok) {
    throw new Error("Failed to fetch watchlist");
  }
  const data = await response.json();
  return data.map(normalizeWatchlistItem);
}

export async function addToWatchlist(movie) {
  const response = await fetch(`${API_URL}/api/watchlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  });

  if (!response.ok) {
    throw new Error("Failed to add movie to watchlist");
  }

  const data = await response.json();
 return normalizeWatchlistItem(data);
}

export async function deleteFromWatchlist(id) {
  const response = await fetch(`${API_URL}/api/watchlist/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Failed to delete movie");
  }

  return true;
}

export async function updateWatchlistItem(id, updates) {
  const response = await fetch(`${API_URL}/api/watchlist/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates)
  });

  if (!response.ok) {
    throw new Error("Failed to update watchlist item");
  }

  const data = await response.json();
 return normalizeWatchlistItem(data);
}