import React from "react";
import Modal from "../Common/Modal";
import { useDispatch, useSelector } from "react-redux";
import useFetchContentVideo from "../../hooks/useFetchContentVideo";
import {
  addModalVideoLoader,
  resetModalVideoLoader,
  resetSelectedImageItem,
} from "../../slice/contentSlice";
import Player from "../Common/Player";
import { youtubeSrcUrl } from "../../utils/constants";

const CardInfoModal = ({ contentItem }) => {
  const dispatch = useDispatch();
  const { title, overview, name } = contentItem;
  const modalVideoLoader = useSelector((store) => store.content)?.modalVideoLoader;
  useFetchContentVideo(title ? title : name, true);
  const imageTrailerVideoDetails = useSelector(
    (store) => store.content
  )?.imageTrailerVideoDetails;
  const closeModalHandler = () => {
    dispatch(resetSelectedImageItem());
  };
  const src = youtubeSrcUrl(imageTrailerVideoDetails?.key);
  return (
    <Modal closeModalHandler={closeModalHandler}>
      {imageTrailerVideoDetails?.key && (
        <Player width="w-full" src={src} videoLoader={modalVideoLoader} />
      )}
      <div className="text-white bg-black bg-opacity-75 p-2">
        <h1 className="text-3xl font-bold text-white">
          {title ? title : name}
        </h1>
        <p className="text-sm py-4 text-white">{overview}</p>
      </div>
    </Modal>
  );
};

export default CardInfoModal;
