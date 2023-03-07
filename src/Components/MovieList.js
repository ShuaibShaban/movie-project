import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:9292/movies');
        const data = await response.json();

        setMovies(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.image_url} alt={movie.title} />
          <p>Year: {movie.year}</p>
          <p>Director: {movie.director}</p>
          <p>Description: {movie.description}</p>
          <p>Rating: {movie.rating}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
