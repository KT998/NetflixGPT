import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        uid: null,
        displayName: null,
        email: null,
        photoURL: null
    },
    reducers: {
        addUser: (state, action) => {
            const { uid, displayName, email, photoURL } = action.payload;
            state.uid = uid;
            state.displayName = displayName;
            state.email = email;
            state.photoURL = photoURL;
        },
        removeUser: (state, action) => {
            state.uid = null;
            state.displayName = null;
            state.email = null;
            state.photoURL = null;
        },
        updateDisplayNameForUser: (state, action) => {
            state.displayName = action.payload;
        }
    }
})

export const { addUser, removeUser, updateDisplayNameForUser } = userSlice.actions;
export default userSlice.reducer;