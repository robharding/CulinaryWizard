"use client";

import { FC } from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export const navItems = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "Collection",
    slug: "/collection",
  },
];

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur ">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex h-14 items-center justify-between px-2.5 md:px-20">
          <h1 className="font-bold">
            Culinary<span className="text-primary">Wizard</span>
          </h1>
          <div className="hidden sm:flex flex-row items-center gap-4 list-none text-xs font-semibold">
            {navItems.map((navItem, i) => (
              <li key={i}>
                <Button variant="ghost" size="sm" className="text-xs">
                  {navItem.name}
                </Button>
              </li>
            ))}
            <Button className="flex flex-row text-xs shadow" size={"sm"}>
              New Recipe <MoveRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
