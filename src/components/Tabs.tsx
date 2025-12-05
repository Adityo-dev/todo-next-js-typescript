import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

function TabsCompo() {
  return (
    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger value="all" asChild>
          <Link href="/">All</Link>
        </TabsTrigger>
        <TabsTrigger value="active" asChild>
          <Link href="/?todos=active">Active</Link>
        </TabsTrigger>
        <TabsTrigger value="completed" asChild>
          <Link href="/?todos=completed">Completed</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default TabsCompo;
