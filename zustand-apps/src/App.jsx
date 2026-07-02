import { useState } from "react";
import useCounterStore from "./store/counterStore";
import useTodoStore from "./store/todoStore";
function App() {
  const { count, increment, decrement, reset, incrementBy } = useCounterStore();
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodoStore();
  const [text, setText] = useState("");
  const handleAddTodo = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => incrementBy(5)}>Increment by 5</button>
      </div>
      {/* Todo Input */}

      <h2 style={{ margin: "50px auto" }}>Todo App</h2>
      <input
        type="text"
        placeholder="Add a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <hr />

      {/* Todo List */}

      {todos.length === 0 ? (
        <p>No Todos Found</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />

              <span
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>

              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
