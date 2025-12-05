"use client";
import { TodosContext } from "@/context/todosContext";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";

function Todos() {
  const todoCtx = useContext(TodosContext);
  console.log(todoCtx);

  const handleDelete = (id: string) => {
    if (!todoCtx) return;

    todoCtx.handleDeleteTodo(id);
  };

  const handleToggle = (id: string) => {
    if (!todoCtx) return;
    todoCtx.handleToggleTodo(id);
  };

  // Get filter from URL search params
  const searchParams = useSearchParams();
  const filter = searchParams.get("todos") || "all";

  // filtering logic
  let filteredTodos = todoCtx?.todos || [];

  if (filter === "active") {
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);
  }

  if (filter === "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
  }

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl flex flex-col gap-4">
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center gap-3 sm:gap-4"
        >
          <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-orange-600 has-[[aria-checked=true]]:bg-orange-50 dark:has-[[aria-checked=true]]:border-orange-500 dark:has-[[aria-checked=true]]:bg-orange-600">
            <Checkbox
              id={todo.id}
              checked={todo.completed}
              onCheckedChange={() => handleToggle(todo.id)}
            />
            <p
              className={`text-muted-foreground text-sm ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.task}
            </p>
          </Label>
          {todo.completed && (
            <Button onClick={() => handleDelete(todo.id)} variant="ghost">
              Delete
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Todos;
