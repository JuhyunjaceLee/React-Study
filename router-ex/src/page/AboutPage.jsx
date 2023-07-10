import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <button onClick={goToHome}>Go to Homepage</button>
    </div>
  );
}
