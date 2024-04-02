import { ToDo } from "../types/todoTypes";

type ToDoCardProps = {
  oneToDo: ToDo;
};
const ToDoCard = ({ oneToDo }: ToDoCardProps) => {
  return (
    <div className="toDo-card">
      <ul>
        <li style={{ listStyle: "none" }}>{oneToDo.date}</li>
        <li>{oneToDo.name}</li>
      </ul>
    </div>
  );
};

export default ToDoCard;
