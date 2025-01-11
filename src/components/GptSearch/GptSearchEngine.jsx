import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../../utils/langConstants";
import { addGptSearchContentResults } from "../../slice/gptSearchSlice";
import gptSearchContent from "../../utils/gptSearchContent";

const GptSearchEngine = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const langSelectValue = useSelector(
    (store) => store.config
  ).languageSelectValue;
  const searchBtnHandler = async () => {
    const { contentGptResults, movieOrTvShowResults } = await gptSearchContent(
      searchText?.current?.value
    );
    dispatch(
      addGptSearchContentResults({
        gptResults: contentGptResults,
        movieOrTvShowResults: movieOrTvShowResults,
      })
    );
  };
  return (
    <div className="absolute pt-32 flex w-screen justify-center">
      <form
        className="bg-black m-4 p-4 w-[40%]"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={languages[langSelectValue].gptPlaceHolderName}
          className="p-3 w-[78%] mx-2"
        />
        <button
          className="w-[17%] p-3 text-white bg-red-700 rounded-lg mx-1"
          onClick={searchBtnHandler}
        >
          {languages[langSelectValue].gptSearchBtnTextName}
        </button>
      </form>
    </div>
  );
};

export default GptSearchEngine;
