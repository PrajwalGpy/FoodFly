import React, { useState, useContext } from "react";
import logo from "..//Images/logo.png";
import { LuShoppingCart } from "react-icons/lu";
import { CgMenu } from "react-icons/cg";
import avatar from "..//Images/avatar.png";
import { motion } from "framer-motion";
import { CartContext } from "../utils/CartContext";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";

export const NavBar = ({ setShowLogin }) => {
  const { cart } = useContext(CartContext);
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
            <Link to={"/"}>
              <li
                onClick={() => setIsMenu("HOME")}
                className={
                  isMenu === "HOME"
                    ? "active: border-b-2 border-black text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                    : "text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                }
              >
                HOME
              </li>
            </Link>
            <Link to={"/MENU"}>
              <li
                onClick={() => setIsMenu("menu")}
                className={
                  isMenu === "menu"
                    ? "active: border-b-2 border-black text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                    : "text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                }
              >
                MENU
              </li>
            </Link>
            <Link to={"/About"}>
              <li
                onClick={() => setIsMenu("About")}
                className={
                  isMenu === "About"
                    ? "active: border-b-2 border-black text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                    : "text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                }
              >
                ABOUT
              </li>
            </Link>
            <Link to={"/Contact"}>
              <li
                onClick={() => setIsMenu("Contact")}
                className={
                  isMenu === "Contact"
                    ? "active: border-b-2 border-black text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                    : "text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                }
              >
                Contact
              </li>
            </Link>
          </ul>
          <Link to={"/Cart"}>
            <div className="relative flex items-center justify-center ml-7">
              <LuShoppingCart className="text-black text-2xl cursor-pointer" />
              <div className="absolute -top-2 left-4 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
                <p className="text-sm font-semibold text-white">
                  {cart.length}
                </p>
              </div>
            </div>
          </Link>
          <div onClick={() => setShowLogin((prev) => !prev)}>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={avatar}
              alt="userprofile"
              className="avatar w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-lg cursor-pointer ml-7"
            />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-between w-full h-full ">
        <div onClick={handleMenuClick}>
          <CgMenu className="text-2xl cursor-pointer" />
        </div>
        <Link to={"/"}>
          <div className="flex items-center justify-center w-14 h-14">
            <img src={logo} className="w-full h-full object-cover" alt="Logo" />
            <p className="text-2xl font-bold text-slate-950">FOODFLY</p>
          </div>
        </Link>
        <Link to={"/Cart"}>
          <div className="flex items-center">
            <div className="relative flex items-center justify-center ml-7">
              <LuShoppingCart className="text-black text-2xl cursor-pointer" />
              <div className="absolute -top-2 left-4 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
                <p className="text-sm font-semibold text-white">
                  {cart.length}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownVisible && (
        <div className="lg:hidden flex flex-col items-center bg-white shadow-xl w-[30%] absolute top-20 left-0">
          <ul className="flex flex-col items-start w-full h-full p-7">
            <Link to={"/"}>
              <li
                onClick={() => {
                  setIsMenu("HOME");
                  setIsDropdownVisible(false);
                }}
                className={
                  isMenu === "HOME"
                    ? "active: border-b-2 border-black text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                    : "text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                }
              >
                HOME
              </li>
            </Link>
            <Link to={"/"}>
              <li
                onClick={() => {
                  setIsMenu("MENU");
                  setIsDropdownVisible(false);
                }}
                className={
                  isMenu === "menu"
                    ? "active: border-b-2 border-black text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                    : "text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                }
              >
                MENU
              </li>
            </Link>
            <Link to={"/About"}>
              <li
                onClick={() => {
                  setIsMenu("About");
                  setIsDropdownVisible(false);
                }}
                className={
                  isMenu === "About"
                    ? "active: border-b-2 border-black text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                    : "text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                }
              >
                ABOUT
              </li>
            </Link>
            <Link to={"/Contact"}>
              <li
                onClick={() => {
                  setIsMenu("Contact");
                  setIsDropdownVisible(false);
                }}
                className={
                  isMenu === "Contact"
                    ? "active: border-b-2 border-black text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out"
                    : "text-base text-black cursor-pointer hover:text-slate-900 duration-100 transition-all ease-in-out "
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};
