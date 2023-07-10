import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id, num } = useParams();
  console.log("params", id, num);
  return (
    <div>
      <h1>Products Detail!!</h1>
    </div>
  );
}
