import React from "react";
import "./Header.css";
import HeaderItems from "./headerItems/HeaderItems";

function Header() {
  const headerItems = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "Orders", to: "/orders" },
    { name: "Cart", to: "/cart" },
  ];

  return (
    <div className="header-style-1 header-item-list">
        <nav>
          {headerItems.map((item, index) => {
            return <HeaderItems key={index} item={item} />;
          })}
        </nav>
    </div>
  );
}

export default Header;
