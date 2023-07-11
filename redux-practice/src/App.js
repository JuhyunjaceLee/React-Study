// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const decreaseHandle = () => {
    dispatch({ type: "DECREASEMENT" });
  };

  // const increaseHandle = () => {
  //   setCount((prev) => prev + 1);
  // };

  return (
    <div style={{ fontSize: "36px" }}>
      <button onClick={decreaseHandle}>-</button>
      <span>{count}</span>
      {/* <button onClick={increaseHandle}>+</button> */}
    </div>
  );
}

export default App;
