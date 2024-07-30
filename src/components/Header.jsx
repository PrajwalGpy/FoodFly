import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="header h-[36vw] my-8 mx-auto relative bg-contain w-[70vw] rounded-lg mb-0 pb-0 ">
      <div className=" absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]  gap-7 fad">
        <h2 className="font-medium text-white text-[4vw] pt-3">
          Order your favourite food here
        </h2>
        <p className=" text-white text-[1vw]">
          Experience the best in food delivery with QuickBite! Fast, fresh, and
          reliable service from your favorite local restaurants, delivered right
          to your doorstep. Enjoy delicious meals without the hassle. Order now
          and satisfy your cravings instantly!
        </p>
        <button className="text-xs   border-none text-black bg-white lg:text-lg rounded-3xl p-1">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
