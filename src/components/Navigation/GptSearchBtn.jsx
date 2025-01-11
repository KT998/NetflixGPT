import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchBtn } from "../../slice/gptSearchSlice";

const GptSearchBtn = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gptSearch)?.showGptSearch;
  const gptSearchBtnHandler = () => {
    dispatch(toggleGptSearchBtn());
  };
  return (
    <button
      className="text-white px-2 h-[45px] bg-sky-700 text-nowrap rounded-lg mr-2"
      onClick={gptSearchBtnHandler}
    >
      {!showGptSearch ? "GPT Search" : "Home"}
    </button>
  );
};

export default GptSearchBtn;
