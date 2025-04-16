import React, { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'
import { useDispatch } from 'react-redux';
import {addPopularMovies} from '../utils/movieSlice'

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try{
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    } catch(err) {
      console.error("Failed to fetch now playing movies:", err);
    }
  }
  useEffect(() => {
    getPopularMovies();
  },[]);
}

export default usePopularMovies;
