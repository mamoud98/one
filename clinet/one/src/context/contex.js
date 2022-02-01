import React, { useState, useContext, useEffect, useCallback } from "react";

import { getItems } from "../apis/item";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);

  //function
  const prvpage = useCallback(() => {
    setPage((prv) => (prv >= 10 ? prv - 10 : prv));
  }, [page]);
  const nextpage = useCallback(() => {
    setPage((prv) => prv + 10);
  }, [page]);

  useEffect(() => {
    getItems(page).then((res) => {
      setItems(res.data);
    });
  }, [page]);

  return (
    <AppContext.Provider value={{ items, setItems, nextpage, prvpage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
