import React from "react";
import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto  flex flex-col ">
        <NavBar />

        <main className="mt-24 w-9/12 mx-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
