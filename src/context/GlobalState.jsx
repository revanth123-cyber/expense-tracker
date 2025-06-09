import React, { createContext, useReducer, useCallback } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = useCallback((id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }, []);

  const addTransaction = useCallback((transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }, []);

  const contextValue = {
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
