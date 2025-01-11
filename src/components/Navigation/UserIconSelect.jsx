import React from "react";
import { NETFLIX_USER_ICON } from "../../utils/constants";
import ProfileSelect from "./ProfileSelect";
import { useDispatch, useSelector } from "react-redux";
import { setOpenProfileSelect } from "../../slice/configSlice";

const UserIconSelect = () => {
  const dispatch = useDispatch();
  const openProfileSelect = useSelector(store => store.config)?.openProfileSelect;
  const profileHandler = () => {
    dispatch(setOpenProfileSelect());
  };

  return (
    <span
      className="w-full rounded-md shadow-sm text-sm font-medium flex"
      onClick={profileHandler}
    >
      <img
        className="w-[45px] h-[45px] px-1 rounded-[10px]"
        src={NETFLIX_USER_ICON}
        alt="userIcon"
      />
      <svg
        className="my-4 h-4 w-4 text-white cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      {openProfileSelect && (
        <ProfileSelect/>
      )}
    </span>
  );
};

export default UserIconSelect;
