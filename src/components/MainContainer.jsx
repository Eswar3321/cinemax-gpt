import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import ClipLoader from 'react-spinners/ClipLoader'; // Import the loader

const MainContainer = () => {
  const movies  = useSelector(store => store.movies?.nowPlayingMovies);
  if(!movies) {
    return (
      <div className="absolute h-screen inset-0 flex items-center justify-center bg-black">
        <ClipLoader color="#ffffff" size={50} /> {/* Third-party loader */}
      </div>
    )
  }
  const mainMovie = movies[0];
  const {original_title, overview, id} = mainMovie;
  return (
    <div className="relative w-full h-screen">
      <VideoBackground movieId={id}/>
      <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer;

