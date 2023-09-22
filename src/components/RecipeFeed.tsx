"use client";

import { trpc } from "@/lib/trpc/client";
import { Loader2 } from "lucide-react";
import { FC } from "react";
import RecipeCard from "./RecipeCard";

interface RecipeFeedProps {}

const RecipeFeed: FC<RecipeFeedProps> = ({}) => {
  const { data: recipes, isLoading } = trpc.recipes.getRecipes.useQuery();

  return isLoading ? (
    <Loader2 className="animate-spin" />
  ) : (
    <div className="max-w-3xl px-4 mx-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12">
      {recipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeFeed;
