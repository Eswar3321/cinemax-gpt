import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Home = () => {
  // Fetch data from TMDB API and update store
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <div className="relative">
        <MainContainer className="px-4 md:px-12"/>
        <SecondaryContainer className="px-4 md:px-12"/>
      </div>
    </div>
  );
};

export default Home;
