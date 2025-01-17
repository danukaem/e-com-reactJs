import React from "react";
import "./HeaderItems.css";
import { Link } from "react-router-dom";

const HeaderItems = ({ item }) => {
  return (
    <Link className="header-item" to={item.to}>
      {item.name}
    </Link>
  );
};

export default HeaderItems;
