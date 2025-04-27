import { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'
import {addTrailerVideo} from '../utils/movieSlice'
import { useDispatch } from 'react-redux'

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // fetch tailer video and && updating the store with trailer video data
  const getMovieVideos = async () => {
   try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    if(!response.ok) alert(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    const firstTrailer = data.results?.find(each => each.type === "Trailer");
    const trailer = firstTrailer.length ? firstTrailer : data.results[0];
    dispatch(addTrailerVideo(trailer));
    } catch(err) {
      alert(err.message);
    }
  }
  useEffect(() => {
    getMovieVideos();
  },[]);
}

export default useMovieTrailer;
