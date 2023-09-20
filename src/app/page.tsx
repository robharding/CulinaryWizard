import Hero from "@/components/hero/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-8 w-full ">
      <div className="m-8"></div>
      <Hero />
    </main>
  );
}
