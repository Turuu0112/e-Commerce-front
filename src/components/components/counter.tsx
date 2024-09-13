"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px" }}
      className="flex  gap-2 items-center"
    >
      <button
        onClick={decrement}
        className="w-[32px] h-[32px] rounded-full border border-black"
      >
        −
      </button>
      <h1>{count}</h1>
      <button
        onClick={increment}
        className="w-[32px] h-[32px] rounded-full border border-black"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
