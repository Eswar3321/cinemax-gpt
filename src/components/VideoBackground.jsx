import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-[450%] h-[450%] sm:w-[400%] sm:h-[400%] md:w-[350%] md:h-[350%] lg:w-[300%] lg:h-[300%] xl:w-[250%] xl:h-[250%] -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default VideoBackground;
