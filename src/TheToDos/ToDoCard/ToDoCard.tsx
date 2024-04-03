import { useContext } from "react";
import { ToDo } from "../../types/todoTypes";
import "./ToDoCard.scss";
import { ToDoContext } from "../../context/ToDoContext";
import { ACTION } from "../../context/ToDoContextProvider";

type ToDoCardProps = {
  oneToDo: ToDo;
};
const ToDoCard = ({ oneToDo }: ToDoCardProps) => {
  const { dispatch } = useContext(ToDoContext);

  /***************************************************************************/
  return (
    <div className="toDo-card">
      <ul>
        <li style={{ listStyle: "none", fontWeight: "bold" }}>
          {oneToDo.name}
        </li>
        <li>{oneToDo.description}</li>
        <li>
          {oneToDo.finished ? (
            <span
              onClick={() => {
                dispatch({
                  type: ACTION.CHANGE_FINISHED,
                  payload: { id: oneToDo.id, finished: false },
                });
              }}
            >
              ✅
            </span>
          ) : (
            <span
              onClick={() => {
                dispatch({
                  type: ACTION.CHANGE_FINISHED,
                  payload: { id: oneToDo.id, finished: true },
                });
              }}
            >
              🟩
            </span>
          )}
        </li>
      </ul>
      <button
        className="remove-btn"
        onClick={() => {
          dispatch({ type: ACTION.REMOVE, payload: oneToDo.id });
          console.log("du klickade på Remove-knappen med id= ", oneToDo.id);
        }}
      >
        Ta bort
      </button>
    </div>
  );
};

export default ToDoCard;
