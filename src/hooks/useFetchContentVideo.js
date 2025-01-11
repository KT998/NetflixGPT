import { useEffect } from "react";
import { fetchMovieOrTvShowData } from "../api/content";
import { useDispatch } from "react-redux";
import { addBrowseTrailerVideoDetails, addModalVideoLoader, addSelectedImageClipDetails, addTrailerVideoLoader, resetModalVideoLoader, resetTrailerVideoLoader } from "../slice/contentSlice";
import { TMDB_MOVIE_API_URL, TMDB_TV_SHOW_API_URL } from "../utils/constants";
import { setErroMessages } from "../slice/configSlice";

const useFetchContentVideo = (title, fromCardInfoModal) => {
    const dispatch = useDispatch();
    const getDataResults = async () => {
        try {
            if(fromCardInfoModal) dispatch(addModalVideoLoader());
            else dispatch(addTrailerVideoLoader());
            const searchData = await fetchMovieOrTvShowData(`https://api.themoviedb.org/3/search/multi?query=${title}&include_adult=false`);
            const { id, media_type } = searchData.length ? searchData.filter(data => data.media_type !== 'person')[0] : [];
            const url = media_type === 'movie' ? `${TMDB_MOVIE_API_URL}/${id}/videos` : `${TMDB_TV_SHOW_API_URL}/${id}/videos`
            const dataResults = await fetchMovieOrTvShowData(url);
            const filteredTrailerVideoResults = dataResults.filter(video => video.type === 'Trailer');
            const filteredClipVideoResults = dataResults.filter(video => video.type === 'Clip');
            const trailerVideoResults = filteredTrailerVideoResults.length ? filteredTrailerVideoResults[0] : dataResults[0];
            const clipVideoResults = filteredClipVideoResults.length ? filteredClipVideoResults[0] : filteredTrailerVideoResults[0];
            if (!fromCardInfoModal) {
                dispatch(addBrowseTrailerVideoDetails(trailerVideoResults));
                dispatch(resetTrailerVideoLoader());
            }
            else {
                dispatch(addSelectedImageClipDetails(clipVideoResults));
                dispatch(resetModalVideoLoader());
            }
        }
        catch (error) {
            dispatch(setErroMessages([error.message]));
        }

    }
    useEffect(() => {
        getDataResults();
    }, [])
}

export default useFetchContentVideo;