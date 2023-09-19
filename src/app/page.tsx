import Computers from "@/components/Computers";
import SignIn from "@/components/auth/SignIn";
import { api } from "@/lib/trpc/api";

export default async function Home() {
  const { computers } = await api.computers.getComputers.query();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 mt-24">
      {computers.map((computer) => (
        <div key={computer.id}>{computer.brand}</div>
      ))}

      <Computers />

      <SignIn />
    </main>
  );
}
