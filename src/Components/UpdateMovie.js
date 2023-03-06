import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateMovie() {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [genre, setGenre] = useState('')
  const [director, setDirector] = useState('')
  const [plot, setPlot] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add code to update movie details in database
  }

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input type="text" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input type="text" id="director" value={director} onChange={(e) => setDirector(e.target.value)} />
        </div>
        <div>
          <label htmlFor="plot">Plot:</label>
          <textarea id="plot" value={plot} onChange={(e) => setPlot(e.target.value)}></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateMovie