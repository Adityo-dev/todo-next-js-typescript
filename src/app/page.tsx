import AddTodo from "@/components/AddTodo";
import TabsCompo from "@/components/Tabs";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <main className="min-h-screen w-full px-4 sm:px-6 md:px-10 pt-24 flex flex-col items-center gap-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold text-center">
        <span className="text-orange-500">todo</span> next js + typescript
      </h2>

      <div className="flex flex-col items-center gap-6 w-full max-w-md sm:max-w-lg md:max-w-2xl">
        <TabsCompo />
        <AddTodo />
        <Todos />
      </div>
    </main>
  );
}
