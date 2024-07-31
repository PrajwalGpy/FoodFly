import React from "react";
import { FaRegStar } from "react-icons/fa";

import { imageUrl } from "../utils/constants";

const RestaurantMenuCard = (props) => {
  let { data } = props;
  let { name, cuisines, costForTwo, cloudinaryImageId, avgRating } = data?.info;
  return (
    <div className="gap-10 w-[240px] hover:scale-90 transition-transform m-4 relative cursor-pointer shadow-md p-3 rounded-sm">
      <div className="w-30 h-[10rem] object-contain md:w-52 md:h-[10rem]">
        <img
          src={imageUrl + cloudinaryImageId}
          className="w-[100%] h-[100%] object-cover rounded-[1.125rem]"
        />
      </div>
      <div>
        <h2 className="font-bold text-base">{name}</h2>
        <p>{costForTwo}</p>
        <p
          className="overflow-hidden "
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
          }}
        >
          {cuisines.join(",")}
        </p>

        <div className="flex flex-row items-center">
          <span>
            <FaRegStar fill="green" stroke="green" color="green" />
          </span>

          <span className="ml-2"> {avgRating}</span>
        </div>

        <p>{}</p>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
