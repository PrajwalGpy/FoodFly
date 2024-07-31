import React, { useEffect, useState } from "react";
import { Banner_imageUrl } from "../utils/constants";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { motion } from "framer-motion";
import { RoundeeShrimran } from "./Shrimran";
import { swiggy_api_URL } from "../utils/constants";

function ExpolerMenu() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState();
  let item = document.querySelector(".container");

  function privesSlide() {
    let width = item.clientWidth / 2;
    item.scrollLeft = item.scrollLeft - width;
  }

  function nextSlide() {
    let width = item.clientWidth / 2;
    item.scrollLeft = item.scrollLeft + width;
  }

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(swiggy_api_URL);
      let json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  let FoodBanner = data?.data?.cards?.[0]?.card?.card?.imageGridCards?.info;

  return (
    <div className="flex flex-col gap-5 mt-9" id="expole-menu">
      <h1 className="text-slate-900 font-bold text-2xl">Explore our menu</h1>
      <p className="text-xs md:max-w-[50%]">
        QuickBite delivers your favorite meals fast and fresh from local
        restaurants. Order now and enjoy delicious food at home!
      </p>

      <div>
        <motion.button
          whileTap={{ scale: 0.6 }}
          className="p-1 rounded-[50%] md:p-3 text-center bg-slate-200 shadow-lg mr-3"
          onClick={privesSlide}
        >
          <VscArrowLeft className="text-lg font-extrabold" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.6 }}
          className="p-1 rounded-[50%] md:p-3 text-center bg-slate-200 shadow-lg"
          onClick={nextSlide}
        >
          <VscArrowRight className="text-lg" />
        </motion.button>
      </div>
      <div className="container flex justify-between items-center gap-6 overflow-x-scroll no-scrollbar transition-all shadow-lg">
        {!FoodBanner ? (
          <RoundeeShrimran />
        ) : (
          FoodBanner.map((item) => (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.description ? "All" : item.description
                )
              }
              key={item.id}
              className="transition-transform"
            >
              <img
                className="cursor-pointer min-w-[80px] sm:min-w-[100px] sm:w-[7vw] md:min-w-[150px] md:w-[7vw] lg:min-w-[180px] lg:w-[7vw]"
                src={Banner_imageUrl + item.imageId}
                alt="menu"
              />
            </div>
          ))
        )}
      </div>
      <hr />
    </div>
  );
}

export default ExpolerMenu;
