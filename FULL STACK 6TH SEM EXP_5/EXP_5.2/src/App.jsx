import { Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

// delay helper
const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Lazy components with 1 sec delay
const Dash = lazy(() =>
  Promise.all([
    import("./components/Dashboard"),
    delay(1000),
  ]).then(([moduleExports]) => moduleExports)
);

const Prof = lazy(() =>
  Promise.all([
    import("./components/Profile"),
    delay(1000),
  ]).then(([moduleExports]) => moduleExports)
);

function App() {
  return (
    <>
      <nav>
        <Link to="/">Profile</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Prof />} />
          <Route path="/dashboard" element={<Dash />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
