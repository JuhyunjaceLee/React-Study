import React, { useState } from "react";

export default function Counter({ count }) {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <div className="counter">
      <span className="number">
        {num} / <span>{count}</span>{" "}
      </span>
      <button className="button" onClick={handleClick}>
        Add +
      </button>
    </div>
  );
}
