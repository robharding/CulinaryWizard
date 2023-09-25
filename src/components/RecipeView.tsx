import { Recipe } from "@/lib/db/schema/recipe";
import { FC } from "react";
import Tags from "./Tags";
import { Clock } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

interface RecipeViewProps {
  recipe: Recipe;
}

const RecipeView: FC<RecipeViewProps> = ({ recipe }) => {
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <h2 className="text-xl">{recipe.description}</h2>

      <Tags tags={recipe.tags} />

      <div className="flex flex-row items-center mt-2">
        <Clock className="w-3 h-3 mr-2" />
        <span className="">{recipe.cookTime}</span>
      </div>

      <div className="m-4" />

      <h3 className="font-bold text-lg">Ingredients</h3>
      {recipe.ingredients.map((ingredient, i) => (
        <div key={i}>
          <Checkbox className="mr-2" />
          <span>{ingredient}</span>
        </div>
      ))}

      <div className="m-4" />

      <h3 className="font-bold text-lg">Method</h3>
      {recipe.method.map((instruction, i) => (
        <div key={i}>
          <Checkbox className="mr-2" />
          <span>{instruction}</span>
        </div>
      ))}
    </div>
  );
};

export default RecipeView;
