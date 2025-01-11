import React from "react";
import { TMDB_POSTER_PATH } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedImageItem } from "../../slice/contentSlice";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  if (!item.poster_path) return null;
  const imageClickHandler = (item) => {
    dispatch(addSelectedImageItem(item));
  };
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-400 ease-in-out hover:scale-95 mr-2 w-40 h-60">
      <div className="border border-black -700 w-full h-full object-cover hover:cursor-pointer bg-slate-600">
        <img
          key={item.id}
          className=""
          src={TMDB_POSTER_PATH + item.poster_path}
          alt="content poster"
          onClick={() => imageClickHandler(item)}
        />
      </div>
    </div>
  );
};

export default CardItem;
