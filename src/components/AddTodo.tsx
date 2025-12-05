"use client";
import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TodosContext } from "@/context/todosContext";

export default function AddTodo() {
  const [todoText, setTodoText] = useState<string>("");

  const todoCtx = useContext(TodosContext);
  if (!todoCtx) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todoText.trim()) return;

    todoCtx.handleAddTodo(todoText.trim());
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center">
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md sm:max-w-lg md:max-w-2xl">
        <Input
          type="text"
          placeholder="Enter Your Task"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="flex-1"
        />
        <Button
          type="submit"
          variant="default"
          disabled={!todoText.trim()}
          className="w-full sm:w-auto"
        >
          Add Task
        </Button>
      </div>
    </form>
  );
}
