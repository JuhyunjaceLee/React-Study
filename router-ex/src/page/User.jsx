import React from "react";
import { useNavigate } from "react-router-dom";

export default function User({ auth, setAuth }) {
  const navigate = useNavigate();
  const logoutHandler = () => {
    setAuth(!auth);
    navigate("/");
  };
  return (
    <div>
      <h1>USER PAGE!</h1>
      <button onClick={logoutHandler}>LOGOUT</button>
    </div>
  );
}
