"use client";

import { trpc } from "@/lib/trpc/client";
import { Loader2 } from "lucide-react";
import { FC } from "react";
import RecipeCard from "./RecipeCard";

interface RecipeCollectionProps {}

const RecipeCollection: FC<RecipeCollectionProps> = ({}) => {
  const { data: recipes, isLoading } =
    trpc.recipes.getRecipesInUserCollection.useQuery();

  return isLoading ? (
    <Loader2 className="animate-spin" />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12">
      {recipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeCollection;
