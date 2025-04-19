import React from 'react'

const MovieCard = ({posterPath}) => {
  return (
    <li className="w-48 flex-shrink-0">
      <img 
        className="w-full h-full rounded-lg" 
        src={`https://image.tmdb.org/t/p/w500${posterPath}`} 
        alt="movie poster" 
      />
    </li>
  )
}

export default MovieCard
