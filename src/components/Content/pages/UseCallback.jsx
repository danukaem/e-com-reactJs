import React, { useCallback, useState } from "react";

function UseCallback() {
    const factorialCal = useCallback((n) => {
      if (n < 0) {
        return "Factorial is not defined for negative numbers.";
      }
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * factorialCal(n - 1);
    }, []);

//   const factorialCal = (n) => {
//     if (n < 0) {
//       return "Factorial is not defined for negative numbers.";
//     }
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     return n * factorialCal(n - 1);
//   };

  const [num, setNum] = useState();

  console.log("render UseCallback");

  return (
    <div>
      <button
        onClick={() => {
          setNum(factorialCal(5));
        }}
      >
        {" "}
        click
      </button>
      <div>{num}</div>
    </div>
  );
}

export default UseCallback;
