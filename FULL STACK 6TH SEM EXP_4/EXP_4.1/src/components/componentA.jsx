import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ComponentA() {
  const { count } = useContext(GlobalContext);

  return <h2>Count: {count}</h2>;
}

export default ComponentA;
