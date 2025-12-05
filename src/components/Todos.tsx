"use client";
import { TodosContext } from "@/context/todosContext";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

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
    <div className="w-xl flex flex-col gap-6">
      {filteredTodos.map((todo) => (
        <div key={todo?.id} className="flex justify-between items-center gap-4">
          <div className="flex-1 hover:bg-accent/50 flex items-center gap-3 rounded-lg border p-3 ">
            <Checkbox
              checked={todo?.completed}
              onCheckedChange={() => handleToggle(todo?.id)}
            />

            <p
              className={`text-muted-foreground text-sm ${
                todo?.completed && "line-through"
              }`}
            >
              {todo?.task}
            </p>
          </div>
          {todo?.completed ? (
            <Button onClick={() => handleDelete(todo?.id)} variant="ghost">
              Delete
            </Button>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Todos;
