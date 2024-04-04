/* Uppgiften
Användaren ska kunna lägga till Quests i en Quest Book. Tänk punktlista med to-dos. Fast episkare.

Använd React med Typescript och Sass. Sätt upp med Vite. */
import "./App.scss";
import QuestList from "./TheQuests/QuestList";
import ToDoBox from "./TheToDos/ToDoBox/ToDoBox";
import ToDoSearch from "./TheToDos/ToDoSearch/ToDoSearch";
import ToDoContextProvider from "./context/ToDoContextProvider";

function App() {
  return (
    <div id="app">
      <div id="app-container">
        <ToDoContextProvider>
          <ToDoBox />
          <ToDoSearch />
        </ToDoContextProvider>
        <QuestList />
      </div>
    </div>
  );
}

export default App;
