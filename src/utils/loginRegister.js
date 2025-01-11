import { validateFields } from "./validate";
import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
let errorMessages = [];
const loginRegister = async (name, email, password, isSignUpBtnClicked) => {
    const validationErrorMsgs = validateFields(name, email, password);
    errorMessages = validationErrorMsgs ? [...validationErrorMsgs] : [];
    if (errorMessages && errorMessages.length !== 0) return errorMessages;
    try {
        if (isSignUpBtnClicked) {
            // signup with firebase
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: name
            });
            return { user, errorMessages };
        }
        else {
            // sign in with firebase
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            return { user, errorMessages };
        }
    }
    catch (error) {
        return { user: null, errorMessages: [`${error.code} - ${error.message}`] };
    }
}

export default loginRegister;