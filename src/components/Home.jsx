import React from "react";
import ExpolerMenu from "./ExpolerMenu";
import Header from "./Header";
import RestaurantMenu from "./RestaurantMenu";

function Home() {
  return (
    <div className="">
      <Header />
      <ExpolerMenu />
      <RestaurantMenu />
    </div>
  );
}

export default Home;
