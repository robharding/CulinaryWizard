import HeroForPathname from "@/components/hero/HeroForPathname";

export default function WithHeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="m-4"></div>
      <HeroForPathname />
      <div className="flex mx-auto max-w-4xl px-10">{children}</div>
    </main>
  );
}
