import React, { useState, useEffect } from "react";
import axios from "axios";

const Delete = () => {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9292/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);

  const handleDelete = () => {
    axios.delete(`http://localhost:9292/movies/${selectedMovie}`).then(() => {
      setDeleteMessage("Movie Deleted Successfully!");
      setTimeout(() => {
        setDeleteMessage("");
        setShowDelete(false);
        setSelectedMovie("");
        axios.get("http://localhost:9292/movies").then((response) => {
          setMovies(response.data);
        });
      }, 2000);
    });
  };

  const handleSelectMovie = (id) => {
    setSelectedMovie(id);
    setShowDelete(true);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Movies</h1>
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <span>{movie.title}</span>{" "}
                  <button onClick={() => handleSelectMovie(movie.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {showDelete && (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Are you sure you want to delete this movie?</p>
              <button onClick={handleDelete}>Yes</button>
              <button onClick={() => setShowDelete(false)}>No</button>
              {deleteMessage && <p>{deleteMessage}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Delete;
