function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
    >
      <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      <span className="rounded-full bg-sky-500 px-3 py-1 text-white">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
    </button>
  );
}

export default ThemeToggle;
