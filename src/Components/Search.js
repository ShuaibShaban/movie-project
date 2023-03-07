import React, { useCallback, useState } from "react";
import MovieList from "./MovieList";

const searchBar = {
  display: "flex",
  justifyContent: "right",
};
const input = {
  background: "rgba(255, 255, 255, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  color: "#D9D9D9",
  margin: "2px",
  padding: "5px",
  marginBottom: "30px",
  fontSize: "15px",
};

export default function Search() {
  const [searchTerm, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/movies?search=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.movies);
      } else {
        console.error("Failed to search for movies.");
      }
    } catch (error) {
      console.error("Failed to search for movies:", error);
    }
  };

  const delayedSearch = useCallback(
    debounce(handleSearch, 500),
    [searchTerm]
  );

  const handleChange = useCallback((event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    if (searchTerm) {
      delayedSearch();
    } else {
      setSearchResults([]);
    }
  }, [delayedSearch]);

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}>
        <div style={searchBar}>
          <input
            type="text"
            name="search"
            placeholder="Search by keyword or title"
            value={searchTerm}
            style={input}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-main">
            Search
          </button>
        </div>
      </form>
      {searchResults.length > 0 && <MovieList movies={searchResults} />}
    </div>
  );
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
