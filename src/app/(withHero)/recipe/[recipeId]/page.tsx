import { api } from "@/lib/trpc/api";
import type { NextPage } from "next";

interface RecipePageProps {
  params: {
    recipeId: string;
  };
}

const RecipePage: NextPage<RecipePageProps> = async ({
  params: { recipeId },
}) => {
  const recipe = await api.recipes.getRecipe.query(recipeId);

  return <div>{JSON.stringify(recipe)}</div>;
};

export default RecipePage;
