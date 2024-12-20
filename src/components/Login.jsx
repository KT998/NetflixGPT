import React from "react";
import Header from "./Header";
import Form from "./Form";

const Login = () => {
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
        alt="logo"
      ></img>
      <Form />
    </div>
  );
};

export default Login;
