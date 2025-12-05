"use client";

import { createContext, ReactNode, useState } from "react";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  date: Date;
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
  const [todos, setTodos] = useState<Todo[]>([]);

  // Function to add a new todo
  const handleAddTodo = (task: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      task: task,
      completed: false,
      date: new Date(),
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  // delete a todo by id
  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle todo completion status
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
