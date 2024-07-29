import React, { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constants";
import RestaurantMenuCard from "./RestaurantMenuCard";

function RestaurantMenu() {
  const [restorentdi, setRestorentdi] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let data = await fetch(`${swiggy_api_URL}?page=${page}`);
      let dataJson = await data.json();
      setRestorentdi((prevData) => [
        ...prevData,
        ...(dataJson.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []),
      ]);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  console.log(restorentdi.length);

  return (
    <div className="mt-10">
      <div>
        <h3 className="font-bold text-2xl">
          Restaurants with online food delivery in Bangalore
        </h3>
      </div>
      <div>filters</div>
      <div className="grid grid-cols-4">
        {restorentdi.map((item, index) => {
          return <RestaurantMenuCard data={item} key={index} />;
        })}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default RestaurantMenu;
