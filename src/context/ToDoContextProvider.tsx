import { useReducer } from "react";
import { ToDo, initialToDoS } from "../types/todoTypes";
import { ToDoContext } from "./ToDoContext";

type ToDoContextProviderProps = {
  children: React.ReactNode;
};

type State = ToDo[];
type Action =
  | { type: "ADD_TODO"; payload: ToDo }
  | { type: "REMOVE_TODO"; payload: string }
  | { type: "CHANGE_FINISHED"; payload: ToDo };

export const ACTION = {
  ADD: "ADD_TODO",
  REMOVE: "REMOVE_TODO",
  CHANGE_FINISHED: "CHANGE_FINISHED",
};

//Funktionaliteten för toDoReducer
const toDoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      console.log("Medskickad payload", action.payload);
      return state.filter((t) => t.id !== action.payload);
    case "CHANGE_FINISHED":
      //Få ut rätt todo, gå in i den och ändra på finished
      return state.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, finished: action.payload.finished };
        } else {
          return t;
        }
      });
    default:
      return state;
  }
};

const ToDoContextProvider = ({ children }: ToDoContextProviderProps) => {
  /* useReducer = för att kunna ändra på state (initialToDos) med hjälp av dispatch (toDoReducer) */
  const [state, dispatch] = useReducer(toDoReducer, initialToDoS);

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
