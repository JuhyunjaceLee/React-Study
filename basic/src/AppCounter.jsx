import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const countClick = () => {
    setCount((prev) => prev + 1);
  };
  const countClick2 = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter
          total={count}
          totalOnClick={countClick}
          totalOnClick2={countClick2}
        />
        <Counter
          total={count}
          totalOnClick={countClick}
          totalOnClick2={countClick2}
        />
      </div>
    </div>
  );
}
