import React, { useEffect, useState } from "react";
import { Banner_imageUrl } from "../utils/constants";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import { motion } from "framer-motion";

function ExpolerMenu() {
  let [data, setData] = useState({});
  let [category, setCategory] = useState();
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
      let json = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0153961&lng=77.6346399&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      let data = await json.json();
      setData(data);
    }
    fetchData();
  }, []);

  let FoodBanner = data.data?.cards?.[0]?.card?.card?.imageGridCards?.info;

  return (
    <div className="flex flex-col gap-5 mt-9" id="expole-menu">
      <h1 className="text-slate-900 font-bold text-2xl">Explore our menu</h1>
      <p className="max-w-[50%]">
        QuickBite delivers your favorite meals fast and fresh from local
        restaurants. Order now and enjoy delicious food at home!
      </p>
      <div>
        <motion.button
          whileTap={{ scale: 0.6 }}
          className="rounded-[50%] p-3 text-center bg-slate-200 shadow-lg  mr-3"
          onClick={privesSlide}
        >
          <VscArrowLeft className="text-lg font-extrabold" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.6 }}
          className="rounded-[50%] p-3 text-center bg-slate-200 shadow-lg"
          onClick={nextSlide}
        >
          <VscArrowRight className="text-lg" />
        </motion.button>
      </div>
      <div className="container flex justify-between items-center gap-6 overflow-x-scroll no-scrollbar transition-transform ">
        {FoodBanner &&
          FoodBanner.map((item) => {
            return (
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
                  className=" min-w-[180px]  w-[7vw] cursor-pointer transition-transform"
                  src={Banner_imageUrl + item.imageId}
                  alt="menu"
                />
              </div>
            );
          })}
      </div>
      <hr />
    </div>
  );
}

export default ExpolerMenu;
