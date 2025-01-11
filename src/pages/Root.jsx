import React from "react";
import NavBar from "../components/Navigation/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <NavBar
        customClass="bg-gradient-to-b from-black"
        fromBrowse={false}
        width="w-40"
        height="h-20"
      />
      <Outlet />
    </>
  );
};

export default Root;
