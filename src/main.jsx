import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import RestorentCardMrnudeatil from "./components/RestorentCardMrnudeatil.jsx";
import Cart from "./components/Cart.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";

let AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restMenu/:resId",
        element: <RestorentCardMrnudeatil />,
      },
      {
        path: "/MENU",
        element: <RestaurantMenu />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter}></RouterProvider>
);
