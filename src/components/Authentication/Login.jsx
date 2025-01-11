import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import loginRegister from "../../utils/loginRegister";
import { CAPTCHA_TEXT } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { updateDisplayNameForUser } from "../../slice/userSlice";

const Login = () => {
  const [isSignUpBtnClicked, setIsSignUpBtnClicked] = useState(false);
  const [isLearnMoreClicked, setIsLearnMoreClicked] = useState(false);
  const [validationErrorMessages, setValidationErrorMessages] = useState([]);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignUpHandler = () => {
    setIsSignUpBtnClicked(!isSignUpBtnClicked);
  };

  const toggleLearnMoreHandler = () => {
    setIsLearnMoreClicked(true);
  };

  const signInHandler = async () => {
    const { user, errorMessages } = await loginRegister(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value,
      isSignUpBtnClicked
    );
    if(user && isSignUpBtnClicked) dispatch(updateDisplayNameForUser(user.displayName));
    setValidationErrorMessages(errorMessages);
  };

  return (
    <form
      className="absolute bg-black w-3/12 p-12 my-32 mx-auto right-0 left-0 text-white bg-opacity-85"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="font-bold text-3xl py-2">
        {isSignUpBtnClicked ? "Sign Up" : "Sign In"}
      </h1>
      {isSignUpBtnClicked && (
        <input
          type="name"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-700"
          ref={name}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        className="p-2 my-4 w-full bg-gray-700"
        ref={email}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 my-4 w-full bg-gray-700"
        ref={password}
      />
      {validationErrorMessages?.length >= 0 && (
        <ul className="list-decimal p-2 my-1 w-full">
          {validationErrorMessages?.map((errorMessage, index) => (
            <li className="text-red-600" key={index}>
              {errorMessage}
            </li>
          ))}
        </ul>
      )}

      <button
        className="bg-red-700 p-2 my-4 w-full rounded-lg"
        onClick={signInHandler}
      >
        {!isSignUpBtnClicked ? "Sign In" : "Sign Up"}
      </button>
      <div className="p-2">
        <span className="text-gray-400">
          {!isSignUpBtnClicked ? "New to Netflix?" : "Already Existing User?"}{" "}
        </span>
        <button
          className="font-bold hover:underline"
          onClick={toggleSignUpHandler}
        >
          {!isSignUpBtnClicked ? "Sign Up now." : "Sign In Now."}
        </button>
      </div>
      <div className="p-2 text-xs">
        <span className="text-gray-500">
          { CAPTCHA_TEXT }
        </span>
        {!isLearnMoreClicked && (
          <button
            className="font-bold hover:underline text-blue-700"
            onClick={toggleLearnMoreHandler}
          >
            Learn more.
          </button>
        )}
      </div>
      {isLearnMoreClicked && (
        <div className="p-2 text-xs">
          <span className="text-gray-500">
            The information collected by Google reCAPTCHA is subject to the
            Google
            <Link
              to="https://policies.google.com/privacy"
              target="_blank"
              className="text-blue-600"
            >
              {" "}
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              to="https://policies.google.com/terms"
              target="_blank"
              className="text-blue-600"
            >
              Terms of Service
            </Link>
            , and is used for providing, maintaining, and improving the
            reCAPTCHA service and for general security purposes (it is not used
            for personalised advertising by Google).
          </span>
        </div>
      )}
    </form>
  );
};

export default Login;
