import Hero from "@/components/Hero";
import Balancer from "react-wrap-balancer";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-8">
      <div className="m-8"></div>
      <Hero />
    </main>
  );
}
