import { useRef, useState } from 'react';
import language from '../utils/languageConstants'
import { useSelector } from 'react-redux';
import ai from '../utils/gemini';
import { addResultMovies } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Search Each movie on TMDB
  const searchMovieTMDB = async (movieName) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const data = await response.json();
    return data.results;
  }

  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple calls while loading    
    try {
      setLoading(true);
      console.log('Calling GeminiAI with prompt:', searchText.current.value);
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: searchText.current.value  + " please give me five names as per request comma seperated",
      });      
      const moviesNames = response.text.split(',').map(item => item.trim());
      const moviePromises = moviesNames.map(movieName => searchMovieTMDB(movieName));
      const movieResults = await Promise.all(moviePromises);
      dispatch(addResultMovies({moviesNames: moviesNames, movieResults: movieResults}));
      console.log('Movie results:', movieResults);
    } catch (error) {
      console.error('Error in GPT search:', error);
      // You might want to show an error message to the user here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[30%] md:pt-[15%] flex justify-center">
      <form className="md:w-[50%]" onSubmit={handleGptSearchClick}>
        <input 
          ref={searchText} 
          type="text" 
          className="p-3 mr-4 bg-white text-gray-900 md:w-[70%] rounded-2xl" 
          placeholder={language[langKey].gptSearchPlaceholder}
          disabled={loading}
        />
        <button 
          className="py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800 disabled:bg-gray-500"
          disabled={loading}
        >
          {loading ? 'Searching...' : language[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;
