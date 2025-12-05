import AddTodo from "@/components/AddTodo";
import TabsCompo from "@/components/Tabs";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto pt-24 flex flex-col items-center gap-12">
      <h2 className="text-4xl uppercase font-bold">
        <span className="text-orange-500">todo</span> next js + typescript
      </h2>
      <div className="flex flex-col items-center gap-6">
        <TabsCompo />
        <AddTodo />
        <Todos />
      </div>
    </main>
  );
}
