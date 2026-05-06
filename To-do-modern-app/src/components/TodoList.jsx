import TodoItem from "./TodoItem.jsx";

function TodoList({
  todos,
  onToggle,
  onDelete,
  onStartEdit,
  editingId,
  editingText,
  setEditingText,
  commitEdit,
}) {
  if (!todos.length) {
    return (
      <p className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-400">
        No tasks in this view — add one to get started.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onStartEdit={onStartEdit}
          editingId={editingId}
          editingText={editingText}
          setEditingText={setEditingText}
          commitEdit={commitEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
