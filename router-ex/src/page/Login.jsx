import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ auth, setAuth }) {
  const navigate = useNavigate();
  const loginHandler = () => {
    setAuth(!auth);
    navigate("/user");
  };
  return (
    <div>
      <h1>LOGIN PAGE!</h1>
      <button onClick={loginHandler}>LOGIN</button>
    </div>
  );
}
