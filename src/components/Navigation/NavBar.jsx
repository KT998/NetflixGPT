import React from "react";
import Logo from "./Logo";
import LanguageSelect from "./LanguageSelect";
import GptSearchBtn from "./GptSearchBtn";
import UserIconSelect from "./UserIconSelect";
import { useSelector } from "react-redux";
import useCheckAuthStatus from "../../hooks/useCheckAuthStatus";

const NavBar = (props) => {
  const userId = useSelector((store) => store.user)?.uid;
  const { customClass, width, height } = props;
  const errorMessages = useSelector(store => store.config)?.errorMessages;
  useCheckAuthStatus();
  return (
    <div
      className={`absolute z-10 p-2 w-full flex justify-between ${customClass}`}
    >
      <Logo width={width} height={height} />
      {errorMessages.length === 0 && userId !== null && (
        <div className="flex py-2 mr-8 mt-1">
          <LanguageSelect />
          <GptSearchBtn />
          <UserIconSelect />
        </div>
      )}
    </div>
  );
};

export default NavBar;
