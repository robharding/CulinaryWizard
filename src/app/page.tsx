import Balancer from "react-wrap-balancer";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-8">
      <div className="m-12"></div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center">
        <Balancer className="mx-5">
          Elevate Your Culinary Creations
          <br /> Without the <span className="text-primary">Life Stories</span>
        </Balancer>
      </h1>
    </main>
  );
}
