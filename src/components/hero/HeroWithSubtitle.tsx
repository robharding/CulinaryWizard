"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import Hero from "./Hero";

interface HeroWithSubtitleProps {}

const HeroWithSubtitle: FC<HeroWithSubtitleProps> = ({}) => {
  const pathName = usePathname();

  return (
    <>
      {pathName === "/collection" ? (
        <Hero subtitle="Your Collection" />
      ) : (
        <Hero />
      )}
    </>
  );
};

export default HeroWithSubtitle;
