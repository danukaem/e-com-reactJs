import React, { useContext } from "react";
import { MyContext } from "./MyProvider";

function MyComponent() {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>

      <button
        onClick={() => {
          setValue("update context value!");
        }}
      >
        update value
      </button>
    </div>
  );
}

export default MyComponent;
