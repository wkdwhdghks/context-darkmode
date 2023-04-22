import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div>
      {todos.map((item, index) => (
        <div key={index}>
          <input type="checkbox"></input>
          <label>{item}</label>
        </div>
      ))}

      <form>
        <input value={todo} onChange={(e) => setTodo(e.target.value)}></input>
        <button onClick={addTodo}>추가</button>
      </form>
    </div>
  );
}
