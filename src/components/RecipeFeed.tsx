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
    <>
      {recipes?.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
      ))}
    </>
  );
};

export default RecipeFeed;
