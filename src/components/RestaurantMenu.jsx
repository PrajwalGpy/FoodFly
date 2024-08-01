import React, { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constants";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import Shrimran from "./Shrimran";
import { Link } from "react-router-dom";

function RestaurantMenu() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      let response = await fetch(`${swiggy_api_URL}?page=${page}`);
      let data = await response.json();

      function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            data?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = checkJsonData(data);
      setRestaurants((prevRestaurants) => [...prevRestaurants, ...resData]);
      setFilteredRestaurants((prevRestaurants) => [
        ...prevRestaurants,
        ...resData,
      ]);

      setLoading(false);
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  const handleRatingFilter = () => {
    let filteredData = restaurants.filter((item) => item.info.avgRating >= 4);
    setFilteredRestaurants(filteredData);
  };

  const handleResetFilters = () => {
    setFilteredRestaurants(restaurants);
  };

  const handlePriceFilter = () => {
    let filteredData = restaurants.filter((item) => {
      const cost = item.info.costForTwo;
      return (
        cost.includes("300") ||
        cost.includes("400") ||
        cost.includes("500") ||
        cost.includes("600")
      );
    });
    setFilteredRestaurants(filteredData);
  };

  const handleLessThan300Filter = () => {
    let filteredData = restaurants.filter((item) => {
      const cost = item.info.costForTwo;
      return cost.includes("100") || cost.includes("200");
    });
    setFilteredRestaurants(filteredData);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    let filteredData = restaurants.filter((item) => {
      return item.info.name.toLowerCase().includes(searchTerm);
    });
    setFilteredRestaurants(filteredData);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="mt-10">
      <div>
        <h3 className="font-bold text-2xl">
          Restaurants with online food delivery in Bangalore
        </h3>
      </div>
      <div className="flex flex-wrap gap-10 my-14">
        <button
          className="bg-black text-white text-sm text-center rounded-2xl py-[8px] px-[12px]"
          onClick={handleRatingFilter}
        >
          Ratings 4.0+
        </button>
        <button
          className="bg-black text-white text-sm text-center rounded-2xl py-[8px] px-[12px]"
          onClick={handlePriceFilter}
        >
          Rs. 300-Rs. 600
        </button>
        <button
          className="bg-black text-white text-sm text-center rounded-2xl py-[8px] px-[12px]"
          onClick={handleLessThan300Filter}
        >
          Less than Rs. 300
        </button>
        <button
          className="bg-black text-white text-sm text-center rounded-2xl py-[8px] px-[12px] "
          onClick={handleResetFilters}
        >
          Reset Filters
        </button>

        <input
          type="text"
          placeholder="Search"
          className="w-32 h-9 border p-3 border-slate-950 rounded md:w-64 md:h-9 "
          onChange={handleSearch}
          value={search}
        />
      </div>
      {loading ? (
        <Shrimran />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((item, index) => (
              <Link key={index} to={"/restMenu/" + item.info.id}>
                <RestaurantMenuCard data={item} />
              </Link>
            ))
          ) : (
            <div className="col-span-4 text-center text-xl font-bold">
              No results found
            </div>
          )}
        </div>
      )}
      <div className="flex justify-center mt-10">
        <button
          className="bg-black text-white text-sm text-center rounded-2xl py-[8px] px-[12px] mb-10"
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default RestaurantMenu;
