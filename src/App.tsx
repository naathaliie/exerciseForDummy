/* Uppgiften
Användaren ska kunna lägga till Quests i en Quest Book. Tänk punktlista med to-dos. Fast episkare.

Använd React med Typescript och Sass. Sätt upp med Vite. */
import "./App.scss";
import QuestList from "./TheQuests/QuestList";
import ToDoBox from "./TheToDos/ToDoBox";

function App() {
  return (
    <>
      <ToDoBox />
      {/* <QuestList /> */}
    </>
  );
}

export default App;
