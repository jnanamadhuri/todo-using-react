import { useState } from "react";
import "../styles/style.css";

const generateId = () => Date.now();

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleUpdate = () => {
    if (input.trim() === "") return; // Prevent adding empty todos
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId()
      })
    );
    setInput("");
  };

  const handleClose = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <div className="heading">
        <h1>YOUR TASKS</h1>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="update">
        <button onClick={handleUpdate}>Update</button>
      </div>
      <ul className="list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="remove" onClick={() => handleClose(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
