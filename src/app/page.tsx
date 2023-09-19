import SignIn from "@/components/auth/SignIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 mt-24">
      <SignIn />
    </main>
  );
}
