import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import useRestorentMenu from "../utils/useRestorentMenu";
import ResorentmenuCate from "./ResorentmenuCate";
import Shrimran from "./Shrimran"; // Import the Shrimran component

function RestorentCardMrnudeatil() {
  const [ActiveIndex, setActiveIndex] = useState(false);
  const [loading, setLoading] = useState(true); // Introduce loading state
  const { resId } = useParams();

  const toggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  let data = useRestorentMenu(resId);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  console.log("useParams", data);

  const { name, costForTwoMessage, cuisines } =
    data?.data?.cards?.[2]?.card?.card?.info || {};

  const filtered =
    data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  console.log(data);

  // If loading, display Shrimran component
  if (loading) {
    return <Shrimran />;
  }

  return (
    <div className="w-11/12 my-10">
      <div className="text-xl md:text-4xl font-bold">{name}</div>
      <div className="text-lg font-semibold">{costForTwoMessage}</div>
      <div className="text-lg font-semibold">
        {cuisines && cuisines.join(", ")}
      </div>

      <div>
        {filtered.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between my-10 mx-auto p-5 rounded-md shadow-xl border border-t-8 items-center"
          >
            <div
              className="flex w-full justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="text-lg font-semibold">
                {item.card.card.title}
              </div>
              <IoIosArrowDown className="text-lg animate-pulse" />
            </div>
            {ActiveIndex === index
              ? item.card.card.itemCards &&
                item.card.card.itemCards.map((itemCard, idx) => (
                  <ResorentmenuCate key={idx} data={itemCard} />
                ))
              : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestorentCardMrnudeatil;
