import { useContext, useState } from "react";
import "./ToDoSearch.scss";
import { ToDoContext } from "../../context/ToDoContext";
import { ToDo } from "../../types/todoTypes";

const ToDoSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { state } = useContext(ToDoContext);
  const [foundToDos, setFoundToDos] = useState<ToDo[]>([]);

  console.log("hittade todo´s", foundToDos);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredToDoS = state.filter((todo) => {
      return todo.name.toLowerCase().includes(searchTerm);
    });

    setFoundToDos(filteredToDoS);
  };

  /*********************************************/
  return (
    <div className="toDo-search">
      <label htmlFor="searc-input">
        Sök efter en ToDo:{" "}
        <input
          className="searc-input"
          type="text"
          placeholder="Sök..."
          value={searchTerm}
          onChange={handleChange}
        />
      </label>
      {/*  <button
       onClick={() => {
          const allFoundToDoS = state.filter((t) => {
            return t.name
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase());
          });
          setFoundToDos(allFoundToDoS);
          setSearchTerm("");
        }} 
      >
        Sök
      </button> */}

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

/* (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
          } */
