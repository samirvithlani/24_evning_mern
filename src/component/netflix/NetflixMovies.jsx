import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  return (
    <div>
        <h1>NETFLIX MOVIES</h1>
        <ul>
          <li>
            <Link to="/netflixmovies/thriller">Thriller</Link>
          </li>
          <li>
            <Link to="thriller">Thriller</Link>
          </li>
          <li>
            <Link to="/action">Action</Link>
          </li>
        </ul>
    </div>
  )
}
