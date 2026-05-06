import { useEffect, useMemo, useState } from "react";
import { useTodoStore } from "./store.js";
import TodoList from "./components/TodoList.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

const FILTERS = {
  all: () => true,
  active: (todo) => !todo.completed,
  completed: (todo) => todo.completed,
};

function App() {
  const [draft, setDraft] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    theme,
    setTheme,
    editTodo,
  } = useTodoStore((state) => state);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const filteredTodos = useMemo(
    () => todos.filter(FILTERS[filter]),
    [todos, filter],
  );
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  const handleAdd = (event) => {
    event.preventDefault();
    if (!draft.trim()) return;
    addTodo(draft);
    setDraft("");
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const commitEdit = (id) => {
    if (!editingText.trim()) return;
    editTodo(id, editingText);
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 sm:px-8 lg:px-12">
        <header className="mb-8 flex flex-col gap-8 rounded-3xl bg-white/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl ring-1 ring-slate-200/70 transition-colors duration-500 dark:bg-slate-900/80 dark:ring-slate-700/70">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-sky-600 dark:text-sky-300">
                Smart Tasks
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Modern Todo Studio
              </h1>
            </div>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">
            Organize priorities and keep your list in sync with local storage.
            Premium styling, dark mode, and fast interactions.
          </p>
        </header>

        <main className="space-y-6">
          <section className="rounded-3xl bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-slate-900/85 dark:ring-slate-700/70">
            <form
              onSubmit={handleAdd}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <label htmlFor="new-task" className="sr-only">
                Add new todo
              </label>
              <input
                id="new-task"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                className="grow rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 shadow-inner shadow-slate-100 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:shadow-none dark:focus:border-sky-400 dark:focus:ring-sky-500/20"
                placeholder="Type your next goal..."
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-500 dark:hover:bg-sky-400 dark:focus:ring-sky-400/30"
              >
                Add task
              </button>
            </form>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-950/60">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Remaining
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                  {activeCount}
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-950/60">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Completed
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                  {completedCount}
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-950/60">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Total tasks
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                  {todos.length}
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 rounded-3xl bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-slate-900/85 dark:ring-slate-700/70">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
                <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
                <span>
                  {filteredTodos.length} filtered task
                  {filteredTodos.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.keys(FILTERS).map((key) => (
                  <button
                    key={key}
                    onClick={() => setFilter(key)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === key ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10 dark:bg-slate-100 dark:text-slate-950" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"}`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onStartEdit={startEdit}
              editingId={editingId}
              editingText={editingText}
              setEditingText={setEditingText}
              commitEdit={commitEdit}
            />

            <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
              <p>{completedCount} completed tasks</p>
              <button
                onClick={clearCompleted}
                className="rounded-2xl bg-slate-100 px-4 py-2 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Clear completed
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
