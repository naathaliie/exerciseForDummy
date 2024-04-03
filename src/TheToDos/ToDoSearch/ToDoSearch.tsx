import { useContext, useState } from "react";
import "./ToDoSearch.scss";
import { ToDoContext } from "../../context/ToDoContext";
import { ToDo } from "../../types/todoTypes";

const ToDoSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const { state } = useContext(ToDoContext);
  const [foundToDos, setFoundToDos] = useState<ToDo[]>([]);

  console.log("hittade todo´s", foundToDos);
  return (
    <div className="toDo-search">
      <label htmlFor="searc-input">
        Sök efter en ToDo:{" "}
        <input
          className="searc-input"
          type="text"
          placeholder="Sök..."
          value={searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          const allFoundToDoS = state.filter((t) => {
            return t.name
              .toLocaleLowerCase()
              .includes(searchInput.toLocaleLowerCase());
          });
          setFoundToDos(allFoundToDoS);
          setSearchInput("");
        }}
      >
        Sök
      </button>

      <div className="todo-foundSearches">
        <p>Hittade todo´s:</p>
        {foundToDos.map((todo) => {
          return (
            <ul key={todo.id}>
              <li>{todo.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoSearch;
