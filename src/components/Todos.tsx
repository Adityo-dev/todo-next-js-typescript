"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { TodosContext } from "@/store/todos";
import { useContext } from "react";

function Todos() {
  const todoCtx = useContext(TodosContext);

  const handleDelete = (id: string) => {
    if (!todoCtx) return;

    todoCtx.handleDeleteTodo(id);
  };

  const handleToggleTodo = (id: string) => {
    if (!todoCtx) return;
    todoCtx.handleToggleTodo(id);
  };

  return (
    <div className="w-xl flex flex-col gap-6">
      {todoCtx?.todos.map((todo) => (
        <div key={todo?.id} className="flex justify-between items-center gap-4">
          <div className="flex-1 hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-orange-500 has-[[aria-checked=true]]:bg-orange-50 dark:has-[[aria-checked=true]]:border-orange-900 dark:has-[[aria-checked=true]]:bg-orange-950">
            <Checkbox
              id="toggle-2"
              onCheckedChange={() => handleToggleTodo(todo?.id)}
              className="data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:text-white dark:data-[state=checked]:border-orange-700 dark:data-[state=checked]:bg-orange-700"
            />
            <p className="text-muted-foreground text-sm">{todo?.task}</p>
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
