import React from "react";
import { useSelector } from "react-redux";
import ContentList from "../Content/CardList";

const GptSearchResults = () => {
  const { gptSearchResults, movieOrTvShowSearchResults } = useSelector(
    (store) => store.gptSearch
  );
  return (
    <div className="absolute w-screen mt-72">
      <div className="bg-black bg-opacity-70">
        {gptSearchResults?.map((result, index) => (
          <ContentList
            title={result}
            content={movieOrTvShowSearchResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchResults;
