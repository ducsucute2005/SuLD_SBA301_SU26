import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./CounterCss.css";
export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter">
        <h1>App count number</h1>
        <h2>Counter: {count}</h2>
        <Button onClick={handleIncrease}>increase</Button>
        <Button onClick={handleDecrease}>decrease</Button>
        <Button onClick={handleReset}>reset</Button>
      </div>
    </>
  );
}
