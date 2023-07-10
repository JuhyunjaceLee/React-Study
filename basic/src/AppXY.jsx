import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [current, setCurrent] = useState({ x: -15, y: -15 });
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        // setCurrent({ x: e.clientX, y: e.clientY });
        setCurrent((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
        console.log(current);
      }}
    >
      <div
        className="pointer"
        style={{ left: `${current.x}px`, top: `${current.y}px` }}
      />
    </div>
  );
}
