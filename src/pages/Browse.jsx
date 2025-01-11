import React from "react";
import GptSearchScreen from "../components/GptSearch/GptSearchScreen";
import { TMDB_MOVIE_API_URL, TMDB_TV_SHOW_API_URL } from "../utils/constants";
import useFetchContentResults from "../hooks/useFetchContentResults";
import { useSelector } from "react-redux";
import VideoCard from "../components/Trailer/VideoCard";
import CardSection from "../components/Content/CardSection";
import Logout from "../components/Authentication/Logout";
import CardInfoModal from "../components/Content/CardInfoModal";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gptSearch)?.showGptSearch;
  const signOutBtnClicked = useSelector(
    (store) => store.config
  )?.signOutBtnClicked;
  const selectedImageItem = useSelector(
    (store) => store.content
  )?.selectedImageItem;
  useFetchContentResults(`${TMDB_MOVIE_API_URL}/now_playing`, true);
  useFetchContentResults(`${TMDB_MOVIE_API_URL}/popular`, false, true);
  useFetchContentResults(`${TMDB_MOVIE_API_URL}/top_rated`, false, false, true);
  useFetchContentResults(`${TMDB_MOVIE_API_URL}/upcoming`, false, false, false, true);
  useFetchContentResults(
    `${TMDB_TV_SHOW_API_URL}/airing_today`,
    false,
    false,
    false,
    false,
    true
  );
  useFetchContentResults(
    `${TMDB_TV_SHOW_API_URL}/popular`,
    false,
    false,
    false,
    false,
    false,
    true
  );
  useFetchContentResults(
    `${TMDB_TV_SHOW_API_URL}/top_rated`,
    false,
    false,
    false,
    false,
    false,
    false,
    true
  );
  return (
    <>
      {signOutBtnClicked && <Logout />}
      {!showGptSearch ? (
        <>
          <VideoCard />
          <CardSection />
        </>
      ) : (
        <GptSearchScreen />
      )}
      {selectedImageItem && <CardInfoModal contentItem={selectedImageItem} />}
    </>
  );
};

export default Browse;
