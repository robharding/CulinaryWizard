"use client";

import { trpc } from "@/lib/trpc/client";
import { Loader2 } from "lucide-react";
import { FC } from "react";

interface RecipeFeedProps {}

const RecipeFeed: FC<RecipeFeedProps> = ({}) => {
  const { data: recipes, isLoading } = trpc.recipes.getRecipes.useQuery();

  return isLoading ? (
    <Loader2 className="animate-spin" />
  ) : (
    <div className="max-w-3xl px-4 mx-8 grid grid-cols-2 gap-4">
      {recipes?.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeFeed;
