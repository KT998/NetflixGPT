import React from "react";
import Player from "../Common/Player";
import useFetchContentVideo from "../../hooks/useFetchContentVideo";
import { useSelector } from "react-redux";
import { youtubeSrcUrl } from "../../utils/constants";

const VideoPlayer = ({ title, width }) => {
  useFetchContentVideo(title);
  const trailerVideoLoader = useSelector((store) => store.content)?.trailerVideoLoader;
  const browseTrailerVideoDetails = useSelector(
    (store) => store.content
  )?.browseTrailerVideoDetails;
  const src = `${youtubeSrcUrl(
    browseTrailerVideoDetails?.key
  )}?autoplay=1&mute=1`;
  return <Player width={width} src={src} videoLoader={trailerVideoLoader} />;
};

export default VideoPlayer;
