import React, { createContext, useCallback, useContext, useState } from "react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({
  children
}) => {

  const [data, setData] = useState([]);

  const deleteItem = (id) => {
    setData(data => data.filter(item => item.id !== id));
  };

  const changeData = (state) => {
    setData(prev => [...prev, {...state}]);
  };

  return (
    <DataContext.Provider value={{ data, changeData, deleteItem }}>
      { children }
    </DataContext.Provider>
  );
};