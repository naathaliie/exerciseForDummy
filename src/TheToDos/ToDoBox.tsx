/* Börja med att quests har id, beskrivning och en flagga för avklarad.
Vi ska ha ett antal ofärdiga quests när vi startar appen.
Man ska kunna toggla ett quest att vara avklarat eller inte. Det kan vara 
checkboxar man klickar i och ur, eller någon annan design. */

import { initialToDoS } from "../types/todoTypes";
import "./ToDo.scss";

const ToDoBox = () => {
  const allToDoS = initialToDoS;

  return (
    <div className="toDo-box">
      <p>Att göra:</p>
      <ToDoBox />
    </div>
  );
};

export default ToDoBox;
