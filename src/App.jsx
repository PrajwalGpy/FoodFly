import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { CartProvider } from "./utils/CartContext";
import LoginPopup from "./components/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <AnimatePresence>
      <CartProvider>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <div className=" h-auto  flex flex-col  ">
          <NavBar setShowLogin={setShowLogin} />

          <main className="mt-24 w-9/12 mx-auto">
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AnimatePresence>
  );
}

export default App;
