import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const sumbitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        content: e.target.todo.value,
        id: `${e.target.todo.value}-${todos.length}`,
      },
    ]);
    e.target.todo.value = "";
  };
  return (
    <>
      <form action="" onSubmit={sumbitHandler}>
        <input type="text" name="todo" id="todo" placeholder="Enter Todo" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
