import React from "react";
import GptSearchResults from "./GptSearchResults";
import { NETFLIX_BACKGROUND_IMG } from "../../utils/constants";
import GptSearchEngine from "./GptSearchEngine";

const GptSearchScreen = () => {
  return (
    <>
      <div className="fixed">
        <img src={NETFLIX_BACKGROUND_IMG} alt="logo"></img>
      </div>
      <GptSearchEngine />
      <GptSearchResults />
    </>
  );
};

export default GptSearchScreen;
