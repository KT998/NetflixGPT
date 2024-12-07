import React, { useState } from "react";

const Form = () => {
  const [isSignUpBtnClicked, setIsSignUpBtnClicked] = useState(false);
  const toggleSignUpHandler = (e) => {
    e.preventDefault();
    setIsSignUpBtnClicked(!isSignUpBtnClicked);
  };
  return (
    <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
      <h1 className="font-bold text-3xl py-2">
        {isSignUpBtnClicked ? "Sign Up" : "Sign In"}
      </h1>
      {isSignUpBtnClicked && <input
        type="name"
        placeholder="Full Name"
        className="p-2 my-4 w-full bg-gray-700"
      />}
      <input
        type="email"
        placeholder="Email"
        className="p-2 my-4 w-full bg-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 my-4 w-full bg-gray-700"
      />
      <button className="bg-red-700 p-2 my-4 w-full rounded-lg">
        {!isSignUpBtnClicked ? "Sign In" : "Sign Up"}
      </button>
      <div className="p-2">
        <span className="text-gray-400">{!isSignUpBtnClicked ? "New to Netflix?" : "Already Existing User?"} </span>
        <button
          className="font-bold hover:underline"
          onClick={(e) => toggleSignUpHandler(e)}
        >
          {!isSignUpBtnClicked ? "Sign Up now." : "Sign In Now."}
        </button>
      </div>
    </form>
  );
};

export default Form;
