import { createContext, useState } from "react";

// 1. Create Context
export const GlobalContext = createContext();

// 2. Create Provider Component
export const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  );
};
