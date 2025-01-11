import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSignOutBtnClicked } from "../../slice/configSlice";

const ProfileSelect = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const signOutBtnHandler = () => {
    dispatch(setSignOutBtnClicked());
  }
  return (
    <div class="absolute z-10 w-48 right-10 top-20 bg-black rounded-md shadow-md m-0">
      <div>
        <div className="flex m-2">
          <img
            className="w-7 h-6 mx-1 pr-1"
            src="https://th.bing.com/th?id=OIP.RE_WgzICByGEGmvLtanb6QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="userIcon"
          />
          <p className="text-sm text-white hover:text-red-800">
            {user?.displayName}
          </p>
        </div>
        <div className="flex m-2">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="user"
            className="svg-inline--fa fa-user text-2xl mt-1 text-white w-7 h-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
            ></path>
          </svg>
          <Link
            to="/user-profile"
            className="block px-4 py-2 text-sm text-white hover:text-red-800"
          >
            Profile
          </Link>
        </div>
        <div className="flex m-2">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right-from-bracket"
            className="svg-inline--fa fa-arrow-right-from-bracket text-2xl mt-1 text-white w-7 h-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
            ></path>
          </svg>
          <button
            onClick={signOutBtnHandler}
            className="block px-4 py-2 text-sm text-white hover:text-red-800"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfileSelect;
