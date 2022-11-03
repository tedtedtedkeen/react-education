import React, { useContext, createContext, useState } from "react";

const Context = createContext();
export const useProvider = () => useContext(Context);

function DataProvider({ children }) {

  const [data, setData] = useState([]); 

  return (
    <Context.Provider value={{ data, setData }}>
      { children }
    </Context.Provider>
  );
}

export { DataProvider };