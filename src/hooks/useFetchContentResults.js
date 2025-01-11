import { useEffect } from "react";
import { fetchMovieOrTvShowData } from "../api/content";
import { useDispatch } from "react-redux";
import { addAiringTodayTvShows, addNowPlayingMovies, addPopularMovies, addPopularTvShows, addTopRatedMovies, addTopRatedTvShows, addUpcomingMovies } from "../slice/contentSlice";
import { setErroMessages } from "../slice/configSlice";

const useFetchContentResults = (url, nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies, airingTodayShows, popularShows, topRatedShows) => {
    const dispatch = useDispatch();
    const getContentData = async () => {
        try {
            const dataResults = await fetchMovieOrTvShowData(url);
            if (nowPlayingMovies) dispatch(addNowPlayingMovies(dataResults));
            if (popularMovies) dispatch(addPopularMovies(dataResults));
            if (topRatedMovies) dispatch(addTopRatedMovies(dataResults));
            if (upcomingMovies) dispatch(addUpcomingMovies(dataResults));
            if (airingTodayShows) dispatch(addAiringTodayTvShows(dataResults));
            if (popularShows) dispatch(addPopularTvShows(dataResults));
            if (topRatedShows) dispatch(addTopRatedTvShows(dataResults));
        }
        catch (error) {
            dispatch(setErroMessages([error]));
        }
    }
    useEffect(() => {
        getContentData();
    }, [])
}

export default useFetchContentResults;