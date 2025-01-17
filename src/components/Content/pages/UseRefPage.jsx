import React, { useEffect, useRef, useState } from 'react'

function UseRefPage() {
  const [count1, setcount1] = useState(0);
  const count1Ref = useRef(count1);

  useEffect(() => {
    count1Ref.current = count1; // Keep the ref updated with the latest count1
  }, [count1]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("count1 value:", count1Ref.current); // Stable reference
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [count, setCount] = useState(0);
    const prevCount = useRef(count);
    const btn = useRef(null);
  
    useEffect(() => {
      prevCount.current = count;
      console.log("Current Count: ", count);
      console.log("prevCount.current: ", prevCount.current);
      
    }, [count]);
  
    const refClick = () =>{
      btn.current.style.color ='red';
    }

  return (
    <div>
      
      <h1>Current Count: {count}</h1>
      <h2 ref={btn}>Previous Count: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button onClick={refClick}>color change</button>
      <br />

      <h1>Count: {count1}</h1>
      <button onClick={() => setcount1(count1 + 1)}>Increment</button>
    </div>
  );
}

export default UseRefPage