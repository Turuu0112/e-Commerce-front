"use client";
import { useState } from "react";

let [count, setCount] = useState(0);
const incrementCount = () => {
  count = count + 1;
  setCount(count);
};
const decrementCount = () => {
  count = count - 1;
  setCount(count);
};

export const App = () => {
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};
