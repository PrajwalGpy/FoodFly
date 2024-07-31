import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import RestorentCardMrnudeatil from "./components/RestorentCardMrnudeatil.jsx";
import Cart from "./components/Cart.jsx";

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
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter}></RouterProvider>
);
