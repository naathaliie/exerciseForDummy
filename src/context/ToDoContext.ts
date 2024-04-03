import { createContext } from "react";
import { ToDo, initialToDoS } from "../types/todoTypes";

// Skapar en context för att hantera tillståndet för ToDo-objekt
export const ToDoContext = createContext<{
    state: ToDo[]; // Tillståndet är en array av ToDo-objekt
    dispatch: React.Dispatch<Action>; // Funktion för att skicka åtgärder för att uppdatera tillståndet
  }>({
    state: initialToDoS, // Inledande tillstånd
    dispatch: () => null, // Standardfunktion som inte gör något
  });