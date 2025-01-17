import React, { useState } from 'react'

function CartPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0);

  const numbers = Array.from({ length: 10000 }, (_, i) => i + 1);

  // Expensive computation: Filtering the list
  const filteredNumbers = numbers.filter((num) =>
    num.toString().includes(searchTerm)
  );


  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Counter: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <ul>
        {filteredNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  )
}

export default CartPage