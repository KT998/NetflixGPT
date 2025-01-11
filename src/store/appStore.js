import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import contentReducer from "../slice/contentSlice";
import gptSearchReducer from "../slice/gptSearchSlice";
import configReducer from "../slice/configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        content : contentReducer,
        gptSearch : gptSearchReducer,
        config : configReducer
    }
})

export default appStore;

