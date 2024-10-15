import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  const shows = [
    {
      id:101,
      name: 'Stranger Things',
    },
    {
      id:102,
      name: 'Money Heist',
    },
    {
      id:103,
      name: 'Dark',
    }
  ]
  return (
    <div>
        <h1>NETFLIX SHOWS</h1>
        {/* <ul>
          <li>
            <Link to="/netflix/playcontent/101">Stranger Things</Link>
          </li>
        </ul> */}
        <ul>
          {/* {
            shows.map((show)=>{
              return <li>
                {show.name}
              </li>
            })
          } */}
          {
            shows.map((show)=>{
              return (
                
                <li>
                  <Link to={`/netflix/playcontent/${show.id}`}>{show.name}</Link>
                </li>
              )
            })
          }
          </ul>
    </div>
  )
}
