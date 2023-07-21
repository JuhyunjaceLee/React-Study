// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const decreaseHandle = () => {
    dispatch({ type: "DECREASEMENT", payload: { num: 5 } });
  };

  const increaseHandle = () => {
    dispatch({ type: "INCREASEMENT" });
  };

  return (
    <div style={{ fontSize: "36px" }}>
      <button onClick={decreaseHandle}>-</button>
      <span>{count}</span>
      <button onClick={increaseHandle}>+</button>
      <Box />
    </div>
  );
}

export default App;
