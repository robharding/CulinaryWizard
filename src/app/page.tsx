import RecipeFeed from "@/components/RecipeFeed";
import Hero from "@/components/hero/Hero";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-8 w-full ">
      <div className="m-8"></div>
      <Hero />
      <RecipeFeed />
    </main>
  );
}
