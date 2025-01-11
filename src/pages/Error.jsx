import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetErrorMessages } from "../slice/configSlice";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const errorMessages = useSelector((store) => store.config)?.errorMessages;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backbtnHandler = () => {
    dispatch(resetErrorMessages());
    navigate('/');
  }
  return (
    <div className="fixed my-20 py-40 px-20 bg-black w-screen h-screen text-white bg-opacity-90">
      <div>
        <h1 className="text-6xl">Something Went Wrong.</h1>
        {errorMessages.map((error) => (
          <p className="mt-4 text-2xl">{error}</p>
        ))}
        <button className="px-12 p-4 mr-4 rounded-lg bg-red-700 mt-4" onClick={backbtnHandler}>Back</button>
      </div>
    </div>
  );
};

export default Error;
