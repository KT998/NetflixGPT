import React from "react";
import { NETFLIX_LOGO } from "../../utils/constants";

const Logo = ({ width, height }) => {
  return (
    <div className="flex">
      <img
        className={`${width} ${height} mx-14`}
        src={NETFLIX_LOGO}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
