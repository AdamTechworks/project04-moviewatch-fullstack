import "./SearchBar.css";

function SearchBar({ value, onChange, placeholder }) {
  return (
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
  );
}

export default SearchBar;