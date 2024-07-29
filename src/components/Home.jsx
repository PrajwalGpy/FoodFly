import React from "react";
import ExpolerMenu from "./ExpolerMenu";
import Header from "./Header";
import RestaurantMenu from "./RestaurantMenu";

function Home() {
  return (
    <div>
      <Header />
      <ExpolerMenu />
      <RestaurantMenu />
    </div>
  );
}

export default Home;
