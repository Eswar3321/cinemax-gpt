import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { movieResults, moviesNames } = useSelector(store => store.gpt);
  if(!moviesNames) return null; // Don't show suggestions if moviesNames is not null
  if(!movieResults) return null; // Don't show suggestions if movieResults is null
  return (
    <div className="pl-4 md:pl-12 pb-20 mt-20 md:mt-32 bg-black/60">
      {moviesNames.map((movieName, index) => <MovieList key={index} title={movieName} movies={movieResults[index]} />)}
    </div>
  )
}

export default GptMovieSuggestions
