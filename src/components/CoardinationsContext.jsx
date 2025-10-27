import { useContext, createContext, useState } from "react";
const CoardinationsContext = createContext();
export function CoardinationsProvider({ children }) {
  const [coardinations, setCoardinations] = useState({
    x: 0,
    y: 0,
    d: 0, // 0: north, 1: east, 2: south, 3: west
  });

  return (
    <CoardinationsContext.Provider value={{ coardinations, setCoardinations }}>
      {children}
    </CoardinationsContext.Provider>
  );
}
export function useCoardinations() {
  return useContext(CoardinationsContext);
}
