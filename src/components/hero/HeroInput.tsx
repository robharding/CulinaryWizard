"use client";

import { FC } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroInputProps {
  redirectOnSearchClick?: boolean;
}

const HeroInput: FC<HeroInputProps> = ({ redirectOnSearchClick }) => {
  const router = useRouter();

  const handleInputClick = () => {
    if (redirectOnSearchClick) {
      router.push("/");
    }
  };

  return (
    <div className="w-full mt-8">
      <div className="flex w-full items-center space-x-2">
        <Input
          className=""
          onClick={handleInputClick}
          placeholder="Search for a recipe..."
        />
        <Button type="submit">
          <Send className="w-4 h-4 stroke-3 mx-2" />
        </Button>
      </div>
    </div>
  );
};

export default HeroInput;
