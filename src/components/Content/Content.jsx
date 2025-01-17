import React, { createContext, useState } from "react";
import "./Content.css";
import { Outlet } from "react-router-dom";

export const ContentContext = createContext();

function Content() {
  const [val, setVal] = useState("");

  const typeVal = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      <ContentContext.Provider value={val}>
        <div className="content-style-1 ">
          <Outlet />
          <input type="text" onChange={typeVal} />
        </div>
      </ContentContext.Provider>
    </>
  );
}

export default Content;
