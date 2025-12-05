import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

function TabsCompo() {
  return (
    <>
      <Tabs defaultValue="all">
        <TabsList>
          <Link href="/">
            <TabsTrigger value="all">All</TabsTrigger>
          </Link>
          <Link href="/?todos=active">
            <TabsTrigger value="active">Active</TabsTrigger>
          </Link>
          <Link href="/?todos=completed">
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
    </>
  );
}

export default TabsCompo;
