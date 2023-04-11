import "./App.css";

function App() {
  const list = ["우유", "사과", "라면", "요거트"];
  return (
    <div className="App">
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
