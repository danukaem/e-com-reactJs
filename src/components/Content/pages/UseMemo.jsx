import React, { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [factorial, setFactorial] = useState(0);

  useMemo(() => {
    setFactorial(factorialCal(number));
    return factorial;
  }, [number]);

  const typeNumber = (event) => {
    setNumber(event.target.value);
  };

  function factorialCal(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorialCal(n - 1);
  }

  return (
    <>
      <input type="text" value={number} onChange={typeNumber} />
      <div>UseMemo</div>
      <label>
        factorial of {number} is {factorial}
      </label>
    </>
  );
}

export default UseMemo;
