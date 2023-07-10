import React, { useState } from "react";

export default function Counter({ total, totalOnClick, totalOnClick2 }) {
  const [num, setNum] = useState(0);
  return (
    <div className="counter">
      <span className="number">
        {num}/{total}
      </span>
      <button
        className="button"
        onClick={() => {
          setNum((prev) => prev + 1);
          totalOnClick();
        }}
      >
        Add +
      </button>
      <button
        className="button"
        onClick={() => {
          setNum((prev) => prev - 1);
          totalOnClick2();
        }}
      >
        remove -
      </button>
    </div>
  );
}
