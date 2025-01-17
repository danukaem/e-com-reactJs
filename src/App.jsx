import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./components/Content/pages/HomePage";
import CartPage from "./components/Content/pages/CartPage";
import OrdersPage from "./components/Content/pages/OrdersPage";
import ProductPage from "./components/Content/pages/ProductPage";
import UseRefPage from "./components/Content/pages/UseRefPage";

function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Content />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/useRef" element={<UseRefPage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
