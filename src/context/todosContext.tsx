"use client";

import { createContext, ReactNode, useState, useEffect } from "react";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  date: Date;
};

type StoredTodo = {
  id: string;
  task: string;
  completed: boolean;
  date: string;
};

type TodosContextType = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleToggleTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextType | null>(null);

type TodosProviderProps = {
  children: ReactNode;
};

export function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("todos");
      if (saved) {
        const parsed: StoredTodo[] = JSON.parse(saved);

        return parsed.map((t) => ({
          ...t,
          date: new Date(t.date),
        }));
      }
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (err) {
      console.error("Failed to save todos to localStorage:", err);
    }
  }, [todos]);

  const handleAddTodo = (task: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        task,
        completed: false,
        date: new Date(),
      },
    ]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodosContext.Provider
      value={{ todos, handleAddTodo, handleDeleteTodo, handleToggleTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
}
