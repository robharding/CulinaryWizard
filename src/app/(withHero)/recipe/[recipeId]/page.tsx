import RecipeView from "@/components/RecipeView";
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

  return <RecipeView recipe={recipe} />;
};

export default RecipePage;
