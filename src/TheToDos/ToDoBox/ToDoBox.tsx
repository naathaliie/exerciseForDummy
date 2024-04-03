/* Börja med att quests har id, beskrivning och en flagga för avklarad.
Vi ska ha ett antal ofärdiga quests när vi startar appen.
Man ska kunna toggla ett quest att vara avklarat eller inte. Det kan vara 
checkboxar man klickar i och ur, eller någon annan design. */

import { useContext, useState } from "react";
import "./ToDoBox.scss";
import { ToDoContext } from "../../context/ToDoContext";
import ToDoCard from "../ToDoCard/ToDoCard";
import { ACTION } from "../../context/ToDoContextProvider";
import { ToDo } from "../../types/todoTypes";
import uuid from "react-uuid";
import { getDate } from "../../functions/getDate";

const ToDoBox = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDesc, setInputDesc] = useState("");

  console.log("state ger: ", state);

  const handleOnClick_ADD = () => {
    const newToDo: ToDo = {
      id: uuid(),
      name: inputTitle,
      date: getDate(),
      description: inputDesc,
      finished: false,
    };
    dispatch({ type: ACTION.ADD, payload: newToDo });

    setInputTitle("");
    setInputDesc("");
  };

  /****************************************************************'*/
  return (
    <div className="toDo-box">
      <p>Att göra:</p>
      {state.map((t) => {
        return <ToDoCard key={t.id} oneToDo={t} />;
      })}
      <div className="addToDo-Box">
        <label htmlFor="add-Input">Lägg till ny todo:</label>
        <input
          id="add-Input"
          type="text"
          value={inputTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputTitle(e.target.value)
          }
          placeholder="Titel..."
        />
        <input
          id="add-Input"
          type="text"
          value={inputDesc}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputDesc(e.target.value)
          }
          placeholder="Anteckning..."
        />
        <button onClick={handleOnClick_ADD}>Lägg till</button>
      </div>
    </div>
  );
};

export default ToDoBox;
