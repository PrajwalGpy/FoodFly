import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function RestorentCardMrnudeatil() {
  const [data, setData] = useState({});
  const { resId } = useParams();

  async function fetchData() {
    try {
      const response = await fetch(
        "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
          resId
      );
      const dataJson = await response.json();
      setData(dataJson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [resId]);

  const { name, costForTwoMessage, cuisines } =
    data?.data?.cards?.[2]?.card?.card?.info || {};

  const filtered =
    data.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  console.log(data);

  return (
    <div className="w-11/12  my-10">
      <div className="text-4xl font-bold">{name}</div>
      <div className="text-lg font-semibold">{costForTwoMessage}</div>
      <div className="text-lg font-semibold">
        {cuisines && cuisines.join(", ")}
      </div>

      <div>
        {filtered.map((item, index) => (
          <div
            key={index}
            className="   my-10 mx-auto flex justify-between p-5 rounded-md shadow-xl border border-t-8 items-center"
          >
            <div>{item.card.card.title}</div>
            <IoIosArrowDown className=" text-lg animate-pulse" />
            {/* <div>
              {item.card.card.itemCards &&
                item.card.card.itemCards.map((itemCard, idx) => (
                  <div key={idx}>
                    <div>{itemCard.card.info.name}</div>
                  </div>
                ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestorentCardMrnudeatil;
