import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddMovie from "./AddMovie";
import Search from "./Search";

export const Header = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);

  const handleAddButtonClick = () => {
    setShowAddForm(!showAddForm);
    setShowSearchForm(false);
  };

  const handleSearchButtonClick = () => {
    setShowSearchForm(!showSearchForm);
    setShowAddForm(false);
  };

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <button className="btn btn-main" onClick={handleAddButtonClick}>
                + Add
              </button>
              {showAddForm && <AddMovie />}
            </li>
            
            <li>
              <button className="btn btn-main" onClick={handleSearchButtonClick}>
                + Search
              </button>
              {showSearchForm && <Search />}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
