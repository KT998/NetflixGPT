import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        airingTodayTvShow: null,
        popularTvShow: null,
        topRatedTvShow: null,
        browseTrailerVideoDetails: null,
        imageTrailerVideoDetails: null,
        selectedImageItem: null,
        trailerVideoLoader: false,
        modalVideoLoader: false,
        contentCardLoader: false
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addAiringTodayTvShows: (state, action) => {
            state.airingTodayTvShow = action.payload;
        },
        addPopularTvShows: (state, action) => {
            state.popularTvShow = action.payload;
        },
        addTopRatedTvShows: (state, action) => {
            state.topRatedTvShow = action.payload;
        },
        addBrowseTrailerVideoDetails: (state, action) => {
            state.browseTrailerVideoDetails = action.payload;
        },
        addSelectedImageItem: (state, action) => {
            state.selectedImageItem = action.payload;
        },
        addSelectedImageClipDetails: (state, action) => {
            state.imageTrailerVideoDetails = action.payload;
        },
        resetAllStateForContentOnSignOut: (state) => {
            state.nowPlayingMovies = null;
            state.popularMovies = null;
            state.topRatedMovies = null;
            state.upcomingMovies = null;
            state.airingTodayTvShow = null;
            state.popularTvShow = null;
            state.topRatedTvShow = null;
            state.browseTrailerVideoDetails = null;
            state.imageTrailerVideoDetails = null;
            state.selectedImageItem = null;
        },
        resetSelectedImageItem: (state) => {
            state.selectedImageItem = null;
        },
        addTrailerVideoLoader: (state) => {
            state.trailerVideoLoader = true;
        },
        resetTrailerVideoLoader: (state) => {
            state.trailerVideoLoader = false;
        },
        addModalVideoLoader: (state) => {
            state.modalVideoLoader = true;
        },
        resetModalVideoLoader: (state) => {
            state.modalVideoLoader = false;
        },
        addContentCardLoader: (state) => {
            state.contentCardLoader = true;
        },
        resetContentCardLoader: (state) => {
            state.contentCardLoader = false;
        }
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addAiringTodayTvShows, 
    addPopularTvShows, addTopRatedTvShows, addBrowseTrailerVideoDetails, addSelectedImageItem, addSelectedImageClipDetails, 
    resetAllStateForContentOnSignOut, resetSelectedImageItem, addTrailerVideoLoader, resetTrailerVideoLoader, addModalVideoLoader, 
    resetModalVideoLoader, addContentCardLoader, resetContentCardLoader } = contentSlice.actions;
export default contentSlice.reducer;