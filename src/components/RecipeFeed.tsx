"use client";

import { trpc } from "@/lib/trpc/client";
import { FC } from "react";
import Recipes from "./Recipes";

interface RecipeFeedProps {}

const RecipeFeed: FC<RecipeFeedProps> = ({}) => {
  const { data: recipes, isLoading } = trpc.recipes.getRecipes.useQuery();

  return <Recipes isLoading={isLoading} recipes={recipes} />;
};

export default RecipeFeed;
