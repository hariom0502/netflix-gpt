import React from 'react'
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import {bg_url} from "../utils/constants"


const GptSearch = () => {

  return (
    <div>
        <div className="fixed -z-10">
        <img
          src={bg_url}
          alt="Background"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch