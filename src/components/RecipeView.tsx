import { Recipe } from "@/lib/db/schema/recipe";
import { FC } from "react";
import Tags from "./Tags";

interface RecipeViewProps {
  recipe: Recipe;
}

const RecipeView: FC<RecipeViewProps> = ({ recipe }) => {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <h2 className="text-xl">{recipe.description}</h2>

      <Tags tags={recipe.tags} />
    </div>
  );
};

export default RecipeView;
