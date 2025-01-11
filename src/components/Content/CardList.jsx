import React from "react";
import CardItem from "./CardItem";

const CardList = ({ title, content }) => {
  return (
    <div className="pl-20 py-2">
      <h1 className="text-3xl bold text-white">{title}</h1>
      <div className="flex scroll-smooth overflow-x-auto mt-2 scrollbar-hide">
        <div className="flex">
          {content?.map((x) => (
            <CardItem
              key={x.id}
              item={x}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
