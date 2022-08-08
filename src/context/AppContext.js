import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 20600,
  expenses: [
    { id: 1, name: 'Shopping', cost: 40 },
    { id: 2, name: 'Holday', cost: 10 },
    { id: 3, name: 'Billing', cost: 20 },
  ],
};

export const AppContext = createContext();

//Provider
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
