import { CardType } from "@/app/(components)/cart";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface State {
  cartList: CardType[];
}
interface StateContextType {
    state: State;
    dispatch: React.Dispatch<Action>;
  }
  
type Action = 
   { type: "addToCart"; payload: CardType};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "addToCart": 
      return { ...state, cartList: [...state.cartList, action.payload] };
    default:
      return state;
  }
};


// Create the context
const StateContext = createContext<StateContextType | undefined>(undefined);

// Create the provider component
export const StateContextProvider = ({ children }: { children: ReactNode }) => {
  const initialState: State = {
    cartList: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the state context
export const StateContextCustom = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("StateContextCustom must be used within a StateContextProvider");
  }
  return context;
};
