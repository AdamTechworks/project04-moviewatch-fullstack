import "./SearchBar.css";


function SearchBar({ value, onChange, onSelect, placeholder, suggestions = [] }) {
  const matchingSuggestions = suggestions
    .filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    )
    .slice(0, 5);

  return (
    <>
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />

    {value && (
        <button
          className="clear-btn"
          onClick={() => onChange({ target: { value: "" } })}
        >
          ✕
        </button>
      )}
    </div>
     {value && matchingSuggestions.length > 0 && (
        <div className="autocomplete">
          {matchingSuggestions.map((movie) => (
            <div
              key={movie.id}
              className="autocomplete-item"
              onClick={() => onSelect(movie.title)}
            >
              {movie.title} ({movie.genre})
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchBar; 