import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductPage() {
  let [query, setQuery] = useSearchParams();
  console.log("query :", query.get("q"));
  return (
    <div>
      <h1>Show All Products!!</h1>
    </div>
  );
}
