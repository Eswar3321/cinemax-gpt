import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import {BACKGROUND_IMAGE} from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 bg-cover bg-center">
        <img src={BACKGROUND_IMAGE} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage;
