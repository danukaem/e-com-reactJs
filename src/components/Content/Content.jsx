import React from "react";
import "./Content.css";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import ProductPage from "./pages/ProductPage";
import Header from "../Header/Header";
import HeaderItems from "../Header/headerItems/HeaderItems";

function Content() {
  return (
    <>
      <div className="content-style-1 ">
        <Outlet />
      </div>
    </>
  );
}

export default Content;
