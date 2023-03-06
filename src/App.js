import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Login from './Components/Login'
import RegistrationForm from './Components/RegistrationForm'
import ForgotPassword from './Components/ForgotPassword'
import Home from './Components/Home'
import MovieCard from './Components/MovieCard'
import AddMovie from './Components/AddMovie'
import MovieForm from './Components/MovieForm'
import WatchLater from './Components/WatchLater'
import './App.css'
import UpdateMovie from './Components/UpdateMovie'
import { Header } from './Components/Header'

export default function App() {
  return (

    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/card" element={<MovieCard />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/update-movie" element={<UpdateMovie />} />
          <Route path="/movie-form" element={<MovieForm />} /> 
          <Route path="/watch-later" element={<WatchLater />} />
      
        
        </Routes>
        <>
        <Header />
        </>
      </div>
    </Router>

  )
}