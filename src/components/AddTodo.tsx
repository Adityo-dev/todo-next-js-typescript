"use client";
import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TodosContext } from "@/store/todos";

export default function AddTodo() {
  const [todoText, setTodoText] = useState<string>("");

  const todoCtx = useContext(TodosContext);
  if (!todoCtx) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    todoCtx.handleAddTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-3 w-xl">
        <Input
          type="text"
          placeholder="Enter Your Task"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="flex-1"
        />

        <Button type="submit" variant="default">
          Subscribe
        </Button>
      </div>
    </form>
  );
}
