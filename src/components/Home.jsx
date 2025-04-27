import Header from './Header'
import GptSearchPage from './GptSearchPage'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux'

const Home = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);  

  // Fetch data from TMDB API and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      {showGptSearch ? <GptSearchPage/> : 
      <div className="relative">
        <MainContainer/>
        <div className="relative z-10">
         {trailerVideo && <SecondaryContainer className="px-4 md:px-12"/>}
        </div>
      </div>
      }
    </div>
  );
};

export default Home;
