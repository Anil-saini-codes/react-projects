import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const createTodoStore = persist(
  (set, get) => ({
    todos: [],
    theme: 'light',
    addTodo: (text) => {
      const newTodo = {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false,
        createdAt: Date.now(),
      };
      set({ todos: [newTodo, ...get().todos] });
    },
    toggleTodo: (id) => {
      set({
        todos: get().todos.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        ),
      });
    },
    deleteTodo: (id) => {
      set({ todos: get().todos.filter((item) => item.id !== id) });
    },
    editTodo: (id, text) => {
      set({
        todos: get().todos.map((item) =>
          item.id === id ? { ...item, text: text.trim() } : item
        ),
      });
    },
    clearCompleted: () => {
      set({ todos: get().todos.filter((item) => !item.completed) });
    },
    setTheme: (theme) => set({ theme }),
  }),
  {
    name: 'modern-todo-store',
    getStorage: () => localStorage,
  }
);

export const useTodoStore = create(createTodoStore);
