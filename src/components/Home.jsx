import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';

const Home = () => {
  // Fetch data from TMDB API and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector(store => store.movies);
  return (
    <div className="w-full">
      <Header/>
      <div className="relative w-full">
        <MainContainer/>
        <div className="relative z-10 w-full">
          <SecondaryContainer className="px-4 md:px-12"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
