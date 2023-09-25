import { Recipe } from "@/lib/db/schema/recipe";
import { FC } from "react";

interface RecipeViewProps {
  recipe: Recipe;
}

const RecipeView: FC<RecipeViewProps> = ({ recipe }) => {
  return (
    <div className="w-max">
      <h1>Hello World</h1>
    </div>
  );
};

export default RecipeView;
