import React from "react";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";
import Login from "../components/Authentication/Login";

const Home = () => {
  return (
    <>
      <img
        className="absolute"
        src={NETFLIX_BACKGROUND_IMG}
        alt="logo"
      ></img>
      <Login />
    </>
  );
};

export default Home;
