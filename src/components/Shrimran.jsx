// Shrimran.js
import React from "react";
import Shrim from "./shrimranelement";
import RoundedShrim from "./RoundedShrim";

function Shrimran() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Shrim />
      <Shrim />
      <Shrim />
      <Shrim />
      <Shrim />
      <Shrim />
      <Shrim />
      <Shrim />
    </div>
  );
}

export function RoundeeShrimran() {
  return (
    <div className="flex  gap-4">
      <RoundedShrim />
      <RoundedShrim />
      <RoundedShrim />
      <RoundedShrim />
      <RoundedShrim />
      <RoundedShrim />
      <RoundedShrim />
      <RoundedShrim />
    </div>
  );
}

export default Shrimran;
