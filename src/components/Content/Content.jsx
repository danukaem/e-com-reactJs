import React from "react";
import "./Content.css";
import { Outlet } from "react-router-dom";

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
