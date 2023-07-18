import "./App.css";
import Calendar from "./Calendar";
import RadioBtn from "./RadioBtn";

function App() {
  return (
    <div className="App">
      <Calendar />
      <RadioBtn btnStyle="btn_1" />
      {/* props로 className을 넘겨준다. */}
      <RadioBtn btnStyle="btn_2" />
    </div>
  );
}

export default App;
