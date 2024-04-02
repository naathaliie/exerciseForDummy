const AddToDo = () => {
  return (
    <div className="addToDo-Box">
      <label htmlFor="add-Input">Lägg till ny todo:</label>
      <input id="add-Input" type="text" />
      <button>Lägg till</button>
    </div>
  );
};

export default AddToDo;
