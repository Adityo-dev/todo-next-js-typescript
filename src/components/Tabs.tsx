import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TabsCompo() {
  return (
    <>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all">{/* All Todos */}</TabsContent>

        <TabsContent value="active">{/* Active Todos */}</TabsContent>

        <TabsContent value="completed">{/* Completed Todos */}</TabsContent>
      </Tabs>
    </>
  );
}

export default TabsCompo;
