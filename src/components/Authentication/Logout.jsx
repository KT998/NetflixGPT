import React from "react";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetSignOutBtnClicked } from "../../slice/configSlice";
import { SIGNOUT_TEXT } from "../../utils/constants";
import Modal from "../Common/Modal";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const closeModalHandler = () => {
    dispatch(resetSignOutBtnClicked());
  };
  return (
    <Modal
      customClass=""
      closeModalHandler={closeModalHandler}
    >
      <p className="m-2">
        You're currently signed in as{" "}
        <span className="font-bold">{user?.displayName}</span>
        {SIGNOUT_TEXT}
      </p>
      <button
        className="w-full bg-red-700 text-white my-2 py-2"
        onClick={signOutHandler}
      >
        Sign Out
      </button>
    </Modal>
  );
};

export default Logout;
