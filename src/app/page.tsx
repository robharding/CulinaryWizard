import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-8 w-full ">
      <div className="m-8"></div>
      <Hero />
      <div className="w-2/3 md:w-1/2 lg:md:1/4">
        <div className="flex w-full items-center space-x-2">
          <Input className="" placeholder="Search for a recipe..." />
          <Button type="submit">
            <Send className="w-4 h-4 stroke-3 mx-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
