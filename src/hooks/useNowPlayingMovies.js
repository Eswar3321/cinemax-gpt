import React, { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from '../utils/movieSlice'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try{
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
      if(!response.ok) alert(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
    } catch(err) {
      alert(err.message);
    }
  }
  useEffect(() => {
    getNowPlayingMovies();
  },[]);
}

export default useNowPlayingMovies;
