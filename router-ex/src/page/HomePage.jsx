import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate("/products?q=pants");
  };
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to="/about">Go TO About Page</Link>
      <button onClick={goToProduct}>Pants</button>
      <Link to="/login">Go to Log-In</Link>
    </div>
  );
}
