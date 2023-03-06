import React from "react";
import { useState } from "react";
import { useCallback } from "react";
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
function Search({  setSearchTerm }) {
  const [searchTerm, setSearch] = useState("");
  const handleChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);
  function handleSearch(e) {
    e.preventDefault();
    setSearchTerm(searchTerm);
  }
  return (
    <div style={searchBar}>
      <input
        type="text"
        name="search"
        placeholder="keyword/title"
        value={searchTerm}
        style={input}
        onChange={handleChange}
      />
      <button onClick={handleSearch} style={input}>
        Search
      </button>
    </div>
  );
}
export default Search;