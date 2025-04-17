import language from '../utils/languageConstants'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey  = useSelector(store => store.config.lang);

  return (
    <div className="pt-[30%] md:pt-[15%] flex justify-center">
      <form action="" className="md:w-[50%]">
        <input type="text" className="p-3 mr-4 bg-white text-gray-900 md:w-[70%] rounded-2xl" placeholder={language[langKey].gptSearchPlaceholder}/>
        <button className="py-2 px-4 bg-red-700 text-white">{language[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
