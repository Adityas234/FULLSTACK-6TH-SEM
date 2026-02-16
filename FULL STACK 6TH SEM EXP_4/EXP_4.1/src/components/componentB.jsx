import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ComponentB() {
  const { setCount } = useContext(GlobalContext);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Increment
    </button>
  );
}

export default ComponentB;
