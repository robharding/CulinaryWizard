import HeroWithSubtitle from "@/components/hero/HeroWithSubtitle";

export default function WithHeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center gap-8 w-full ">
      <div className="m-8"></div>
      <HeroWithSubtitle />
      <div className="max-w-3xl px-4 mx-8">{children}</div>
    </main>
  );
}
