import React, { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'
import { useDispatch } from 'react-redux';
import {addUpcomingMovies} from '../utils/movieSlice'

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    try{
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
      const data = await response.json();
      dispatch(addUpcomingMovies(data.results));
    } catch(err) {
      console.error("Failed to fetch now playing movies:", err);
    }
  }
  useEffect(() => {
    getUpcomingMovies();
  },[]);
}

export default useUpcomingMovies;
