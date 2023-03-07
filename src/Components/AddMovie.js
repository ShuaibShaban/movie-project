import React, { useState } from 'react';
import '../App.css';

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [description, setDescription] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:9292/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, year, director, description }),
      });
      if (response.ok) {
        console.log('New movie added successfully!');
        setTitle('');
        setYear('');
        setDirector('');
        setDescription('');
        setShowAddForm(false);
      } else {
        console.error('Failed to add new movie.');
      }
    } catch (error) {
      console.error('Failed to add new movie:', error);
    }
  };

  const handleAddButtonClick = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div>
      <button onClick={handleAddButtonClick}>Add Movie</button>
      {showAddForm && (
        <div className="add-movie-form">
          <h2>Add a New Movie</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="year">Year:</label>
              <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="director">Director:</label>
              <input type="text" id="director" value={director} onChange={(e) => setDirector(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
