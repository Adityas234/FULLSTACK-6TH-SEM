import { lazy, Suspense } from "react";
import "./App.css";

// artificial 2 second delay wrapper
const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const Dash = lazy(() =>
  Promise.all([
    import("./components/Dashboard"),
    delay(2000),
  ]).then(([moduleExports]) => moduleExports)
);

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <h1>Dashboard</h1>
        <Dash />
      </Suspense>
    </>
  );
}

export default App;
