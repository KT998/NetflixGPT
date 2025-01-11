import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { resetAllConfigsOnSignout } from "../slice/configSlice";
import { auth } from "../utils/firebase";
import { resetAllStateForContentOnSignOut, resetSelectedImageItem } from "../slice/contentSlice";
import { resetAllStateForGptSearchOnSignOut } from "../slice/gptSearchSlice";

const useCheckAuthStatus = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errorMessages = useSelector(store => store.config)?.errorMessages;
    useEffect(() => {
        if (errorMessages && errorMessages.length !== 0) {
            dispatch(resetSelectedImageItem());
            navigate("/error");
            return;
        }
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email, photoURL } = user;
                dispatch(
                    addUser({
                        uid,
                        displayName,
                        email,
                        photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                dispatch(resetAllConfigsOnSignout());
                dispatch(resetAllStateForGptSearchOnSignOut());
                dispatch(resetAllStateForContentOnSignOut());
                navigate("/");
            }
        });
        // unsubscribed when compnent unmounts
        // cleanup function
        return () => unsubscribe();
    }, [errorMessages]);
}

export default useCheckAuthStatus;