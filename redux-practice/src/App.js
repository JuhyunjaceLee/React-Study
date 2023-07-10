import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const decreaseHandle = () => {
    dispatch({ type: "DECREASEMENT" });
    setCount((prev) => prev - 1);
  };

  const increaseHandle = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ fontSize: "36px" }}>
      <button onClick={decreaseHandle}>-</button>
      <span>{count}</span>
      <button onClick={increaseHandle}>+</button>
    </div>
  );
}

export default App;
