"use client";

import { FC } from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import NewRecipeDialog from "../NewRecipeDialog";

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
  const session = useSession();
  const loggedIn = !!session.data?.user;

  return (
    <header className="sticky top-0 z-50 w-full ">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex h-14 items-center justify-between px-2.5 md:px-20">
          <div></div>
          <div className="hidden sm:flex flex-row items-center gap-4 list-none text-xs font-semibold">
            {navItems.map((navItem, i) => (
              <li key={i}>
                <Button variant="ghost" size="sm" className="text-xs">
                  {navItem.name}
                </Button>
              </li>
            ))}
            {loggedIn ? (
              <NewRecipeDialog>
                <Button className="flex flex-row text-xs shadow" size={"sm"}>
                  New Recipe <MoveRight className="ml-2 w-4 h-4" />
                </Button>
              </NewRecipeDialog>
            ) : (
              <Button
                className="flex flex-row text-xs shadow"
                onClick={() => signIn("google")}
                size={"sm"}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
