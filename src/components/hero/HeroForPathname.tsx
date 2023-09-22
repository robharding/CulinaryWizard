"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import Hero from "./Hero";

interface HeroForPathnameProps {}

const HeroForPathname: FC<HeroForPathnameProps> = ({}) => {
  const pathName = usePathname();

  if (pathName === "/collection") {
    return <Hero subtitle="Your Collection" />;
  }

  if (pathName.startsWith("/recipe")) {
    return <Hero redirectOnSearchClick={true} />;
  }

  return <Hero />;
};

export default HeroForPathname;
