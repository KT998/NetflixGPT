import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name : 'gptSearch',
    initialState : {
        showGptSearch : false,
        movieOrTvShowSearchResults : null,
        gptSearchResults : null,
    },
    reducers : {
        toggleGptSearchBtn : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptSearchContentResults : (state, action) => {
            const { gptResults, movieOrTvShowResults } = action.payload;
            state.gptSearchResults = gptResults;
            state.movieOrTvShowSearchResults = movieOrTvShowResults; 
        },
        resetAllStateForGptSearchOnSignOut : (state) => {
            state.showGptSearch = false;
            state.gptSearchResults = null;
            state.movieOrTvShowSearchResults = null;
        }
    }
})

export const { toggleGptSearchBtn, addGptSearchContentResults, resetAllStateForGptSearchOnSignOut } = gptSearchSlice.actions;
export default gptSearchSlice.reducer; 