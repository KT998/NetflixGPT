import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoPlayer from "./VideoPlayer";

const VideoCard = () => {
  const movies = useSelector((store) => store.content?.nowPlayingMovies);
  if (!movies) return;
  const trailerMovie = movies[1];
  const { id, title, overview } = trailerMovie;
  return (
    <>
      <VideoTitle title={title} overview={overview} />
      <VideoPlayer width="w-screen" title={title} />
    </>
  );
};

export default VideoCard;
