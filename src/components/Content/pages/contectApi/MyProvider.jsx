import React, { createContext, useState } from "react";

export const MyContext = createContext();

function MyProvider({children}) {
  const [value, setValue] = useState("hello Context!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
