"use client";

import { FC, useState } from "react";
import { buttonVariants } from "../ui/button";
import { MoveRight } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import NewRecipeDialog from "../NewRecipeDialog";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const navItems = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "Collection",
    slug: "/collection",
    loggedIn: true,
  },
];

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { scrollY } = useScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setHookedYPosition(latest);
  });

  const session = useSession();
  const loggedIn = !!session.data?.user;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        hookedYPostion > 50 && "sm:bg-white sm:dark:bg-black drop-shadow"
      )}
    >
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex h-14 items-center justify-between px-2.5 md:px-20">
          <div></div>
          <div className="hidden sm:flex flex-row items-center gap-4 list-none text-xs font-semibold">
            {navItems.map((navItem, i) => (
              <div key={i}>
                {!loggedIn && navItem.loggedIn ? null : (
                  <li>
                    <Link
                      href={navItem.slug}
                      className={cn(
                        buttonVariants({ size: "sm", variant: "ghost" }),
                        "text-xs"
                      )}
                    >
                      {navItem.name}
                    </Link>
                  </li>
                )}
              </div>
            ))}
            {loggedIn ? (
              <NewRecipeDialog>
                <div
                  className={cn(
                    "flex flex-row text-xs shadow",
                    buttonVariants({ size: "sm" })
                  )}
                >
                  New Recipe <MoveRight className="ml-2 w-4 h-4" />
                </div>
              </NewRecipeDialog>
            ) : (
              <div
                className={cn(
                  "flex flex-row text-xs shadow",
                  buttonVariants({ size: "sm" })
                )}
                onClick={() => signIn("google")}
              >
                Sign In
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
