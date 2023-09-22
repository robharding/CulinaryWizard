"use client";

import { trpc } from "@/lib/trpc/client";
import { FC } from "react";
import Recipes from "./Recipes";

interface RecipeCollectionProps {}

const RecipeCollection: FC<RecipeCollectionProps> = ({}) => {
  const { data: recipes, isLoading } =
    trpc.recipes.getRecipesInUserCollection.useQuery();

  return <Recipes isLoading={isLoading} recipes={recipes} />;
};

export default RecipeCollection;
