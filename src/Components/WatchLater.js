import React, { useState, useEffect } from 'react';

function MovieCard({ movie, onWatchLater }) {
  const [isWatched, setIsWatched] = useState(false);

  // Check if the movie is already in the "watch later" list
  useEffect(() => {
    const watchLaterList = JSON.parse(localStorage.getItem('watchLaterList') || '[]');
    setIsWatched(watchLaterList.includes(movie.id));
  }, [movie.id]);

  function handleWatchLaterClick() {
    onWatchLater(movie);
    setIsWatched(true);
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <button disabled={isWatched} onClick={handleWatchLaterClick}>
        {isWatched ? 'Added to Watch Later' : 'Watch Later'}
      </button>
    </div>
  );
}

function WatchLaterList() {
  const [watchLaterList, setWatchLaterList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('watchLaterList') || '[]');
    setWatchLaterList(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem('watchLaterList', JSON.stringify(watchLaterList));
  }, [watchLaterList]);

  function handleRemoveClick(movieId) {
    setWatchLaterList(list => list.filter(id => id !== movieId));
  }

  return (
    <div>
      <h2>Watch Later List</h2>
      <ul>
        {watchLaterList.map(id => (
          <li key={id}>
            Movie ID: {id} 
            <button onClick={() => handleRemoveClick(id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [watchLaterList, setWatchLaterList] = useState([]);

  function handleWatchLater(movie) {
    setWatchLaterList(list => [...list, movie.id]);
  }

  return (
    <div>
      <h1>Movie Website</h1>
      <WatchLaterList />
      <hr />
      <MovieCard movie={{id: 1, title: "The Matrix", description: "A sci-fi action movie"}} onWatchLater={handleWatchLater} />
      <MovieCard movie={{id: 2, title: "Inception", description: "A mind-bending thriller"}} onWatchLater={handleWatchLater} />
      <MovieCard movie={{id: 3, title: "Star Wars", description: "A space opera"}} onWatchLater={handleWatchLater} />
    </div>
  );
}

export default App;