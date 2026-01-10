import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="card">
        <h1>SIMPLE SPA</h1>
        <p>Count: {count}</p>

        <div className="buttons">
          <button className="plus" onClick={() => setCount(count + 1)}>
            Plus
          </button>

          <button className="minus" onClick={() => setCount(count - 1)}>
            Minus
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
