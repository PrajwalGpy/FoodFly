import React from "react";
import { ITEM_IMG_CDN_URL } from "../utils/constants";

function ResorentmenuCate({ data }) {
  return (
    <div className="flex justify-center  border-b-4 p-7 items-center w-full">
      <div className="w-9/12">
        <div className="text-xs text-left sm:px-6 sm:text-lg font-extrabold">
          {data.card.info.name}
        </div>
        <div className="text-xs text-left sm:px-6 sm:text-lg font-semibold">
          ₹{data.card.info.price / 100}
        </div>
        <div className="hidden md:flex md:text-left md:px-6">
          {data.card.info.description}
        </div>
      </div>
      <div className="w-20 h-20  sm:w-40 sm:h-40 relative ">
        <button
          className=" absolute text-[10px]  bg-black text-white sm:font-semibold sm:text-base sm:p-1 bottom-0 sm:right-[1.3rem] rounded-t-lg"
          //   onClick={() => handleclick(ip)}
        >
          ADD TO CART
        </button>
        <img
          src={ITEM_IMG_CDN_URL + data.card.info.imageId}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default ResorentmenuCate;