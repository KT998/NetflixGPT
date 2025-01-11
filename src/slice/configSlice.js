import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        languageSelectValue: "en-US",
        openProfileSelect: false,
        signOutBtnClicked: false,
        errorMessages: []
    },
    reducers: {
        setLanguageSelectValue: (state, action) => {
            state.languageSelectValue = action.payload;
        },
        setOpenProfileSelect: (state) => {
            state.openProfileSelect = !state.openProfileSelect;
        },
        setSignOutBtnClicked: (state) => {
            state.signOutBtnClicked = true;
        },
        resetSignOutBtnClicked: (state) => {
            state.signOutBtnClicked = false;
        },
        resetAllConfigsOnSignout : (state) => {
            state.languageSelectValue = "en-US";
            state.openProfileSelect = false;
            state.signOutBtnClicked = false;
        },
        setErroMessages : (state, action) => {
            state.errorMessages = action.payload;
        },
        resetErrorMessages : (state) => {
            state.errorMessages = [];
        }
    }
});

export const { setLanguageSelectValue, setOpenProfileSelect, setSignOutBtnClicked, resetSignOutBtnClicked, resetAllConfigsOnSignout, setErroMessages, resetErrorMessages } = configSlice.actions;
export default configSlice.reducer;