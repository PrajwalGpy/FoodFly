import React, { useState } from "react";
import logo from "..//Images/logo.png";
import { LuShoppingCart } from "react-icons/lu";
import { CgMenu } from "react-icons/cg";
import avatar from "..//Images/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [isMenu, setIsMenu] = useState("menu");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMenuClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="fixed z-50 w-full h-20 px-4 sm:px-16 shadow-xl bg-white mb-0 pb-0">
      {/* DeskTop & tablet */}
      <div className="hidden lg:flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="img flex items-center gap-1 w-20 h-20">
            <img src={logo} className="w-full h-full object-cover" alt="Logo" />
            <p className="text-4xl font-bold text-slate-950">FOODFLY</p>
          </div>
        </Link>
        <div className="navbar-menu flex items-center gap-6">
          <ul className="flex items-center gap-14 ml-auto">
            {["HOME", "menu", "ABOUT", "SERVICES"].map((menuItem) => (
              <li
                key={menuItem}
                onClick={() => setIsMenu(menuItem)}
                className={
                  isMenu === menuItem
                    ? "border-b-2 border-black text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                    : "text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                }
              >
                {menuItem}
              </li>
            ))}
          </ul>
          <div className="relative flex items-center justify-center ml-7">
            <LuShoppingCart className="text-black text-2xl cursor-pointer" />
            <div className="absolute -top-2 left-4 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
              <p className="text-sm font-semibold text-white">2</p>
            </div>
          </div>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={avatar}
            alt="userprofile"
            className="avatar w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-lg cursor-pointer ml-7"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-between w-full h-full">
        <div onClick={handleMenuClick}>
          <CgMenu className="text-2xl cursor-pointer" />
        </div>
        <Link to={"/"}>
          <div className="flex items-center justify-center w-24 h-24">
            <img src={logo} className="w-full h-full object-cover" alt="Logo" />
            <p className="text-4xl font-bold text-slate-950">FOODFLY</p>
          </div>
        </Link>
        <div className="flex items-center">
          <div className="relative flex items-center justify-center ml-7">
            <LuShoppingCart className="text-black text-2xl cursor-pointer" />
            <div className="absolute -top-2 left-4 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
              <p className="text-sm font-semibold text-white">2</p>
            </div>
          </div>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={avatar}
            alt="userprofile"
            className="avatar w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-lg cursor-pointer ml-7"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownVisible && (
        <div className="lg:hidden flex flex-col items-center bg-white shadow-xl w-[50%] absolute top-20 left-0">
          <ul className="flex flex-col items-center w-full">
            {["HOME", "menu", "ABOUT", "SERVICES"].map((menuItem) => (
              <li
                key={menuItem}
                onClick={() => {
                  setIsMenu(menuItem);
                  setIsDropdownVisible(false);
                }}
                className={
                  isMenu === menuItem
                    ? "border-b-2 border-black text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out w-full text-center py-2"
                    : "text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out w-full text-center py-2"
                }
              >
                {menuItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
