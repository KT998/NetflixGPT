import React from "react";
import CardList from "./CardList";
import { useSelector } from "react-redux";
import { languages } from "../../utils/langConstants";

const CardSection = () => {
  const contentCollection = useSelector((store) => store.content);
  const languageSelectValue = useSelector(
    (store) => store.config
  ).languageSelectValue;
  return (
    contentCollection && (
      <>
        <div className="bg-black bg-opacity-95">
          <div className="-mt-32 relative z-20">
            <CardList
              title={languages[languageSelectValue].nowPlayingMoviesText}
              content={contentCollection?.nowPlayingMovies}
            />
            <CardList
              title={languages[languageSelectValue].popularMoviesText}
              content={contentCollection?.popularMovies}
            />
            <CardList
              title={languages[languageSelectValue].topRatedMoviesText}
              content={contentCollection?.topRatedMovies}
            />
            <CardList
              title={languages[languageSelectValue].upcomingMoviesText}
              content={contentCollection?.upcomingMovies}
            />
            <CardList
              title={languages[languageSelectValue].airingTodayTvShowsText}
              content={contentCollection?.airingTodayTvShow}
            />
            <CardList
              title={languages[languageSelectValue].popularTvShowsText}
              content={contentCollection?.popularTvShow}
            />
            <CardList
              title={languages[languageSelectValue].topRatedTvShowsText}
              content={contentCollection?.topRatedTvShow}
            />
          </div>
        </div>
      </>
    )
  );
};

export default CardSection;
