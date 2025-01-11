import React from "react";
import { useSelector } from "react-redux";
import { languages } from "../../utils/langConstants";

const VideoTitle = ({ title, overview }) => {
  const languageSelectValue = useSelector(
    (store) => store.config
  )?.languageSelectValue;
  return (
    <div className="absolute w-screen aspect-video pt-[18%] px-20 bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="text-lg py-6 w-1/4 text-white">{overview}</p>
      <div className="text-sm">
        <buton className="bg-gray-700 text-white px-12 p-4 mr-4 rounded-lg bg-opacity-80 cursor-pointer">
          {languages[languageSelectValue].videoPlayText}
        </buton>
        <button className="bg-gray-700 text-white px-12 p-4 rounded-lg bg-opacity-80 cursor-pointer">
          {languages[languageSelectValue].videoMoreInfoText}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
