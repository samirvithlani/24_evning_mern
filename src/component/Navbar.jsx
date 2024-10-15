import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link" href="/netflixmovies">Movies</a> */}
        <Link to ="/netflixmovies" class="nav-link">Movies</Link>
      </li>
      <li class="nav-item">
        
        <Link to ="/netflixshows" class="nav-link">Shows</Link>
      </li>
      <li class="nav-item">
        
        <Link to ="/productlist" class="nav-link">prod list</Link>
      </li>
    
   
    </ul>
    
  </div>
</nav>
  )
}
