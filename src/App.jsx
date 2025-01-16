import { Route, Router, Routes } from "react-router-dom";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./components/Content/pages/HomePage";
import CartPage from "./components/Content/pages/CartPage";
import OrdersPage from "./components/Content/pages/OrdersPage";
import ProductPage from "./components/Content/pages/ProductPage";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Content />
      <Footer />
    </>
  );
}

export default App;
