import { useState } from "react";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodoFunction() {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, id: Date.now(), completed: false }]);
    setNewTodo("");
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos];
    updatedTodos[id].completed = true;
    setTodos(updatedTodos);
  }

  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodoFunction}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
