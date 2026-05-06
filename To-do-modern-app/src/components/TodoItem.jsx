import { useEffect, useRef, useState } from "react";

function TodoItem({
  todo,
  onToggle,
  onDelete,
  onStartEdit,
  editingId,
  editingText,
  setEditingText,
  commitEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingId === todo.id) {
      setIsEditing(true);
      inputRef.current?.focus();
    } else {
      setIsEditing(false);
    }
  }, [editingId, todo.id]);

  return (
    <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-300 hover:border-sky-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-950/80">
      <div className="flex items-start gap-4">
        <button
          type="button"
          onClick={() => onToggle(todo.id)}
          className={`mt-1 h-11 w-11 rounded-2xl border-2 transition ${todo.completed ? "border-sky-500 bg-sky-500/15 text-sky-600" : "border-slate-300 bg-white text-slate-400 hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-500"}`}
        >
          {todo.completed ? "✓" : ""}
        </button>
        <div className="min-w-0 flex-1">
          {isEditing ? (
            <input
              ref={inputRef}
              value={editingText}
              onChange={(event) => setEditingText(event.target.value)}
              onBlur={() => commitEdit(todo.id)}
              onKeyDown={(event) =>
                event.key === "Enter" && commitEdit(todo.id)
              }
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:ring-sky-500/20"
            />
          ) : (
            <div className="flex items-center justify-between gap-3">
              <p
                className={`text-base leading-7 transition ${todo.completed ? "text-slate-400 line-through dark:text-slate-500" : "text-slate-900 dark:text-slate-100"}`}
              >
                {todo.text}
              </p>
              <span className="flex items-center gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => onStartEdit(todo.id, todo.text)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-300"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(todo.id)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-red-600 transition hover:border-red-300 hover:bg-red-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-red-400 dark:hover:bg-red-950/60"
                >
                  Delete
                </button>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        <span>Created {new Date(todo.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default TodoItem;
