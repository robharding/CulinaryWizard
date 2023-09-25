import { Recipe } from "@/lib/db/schema/recipe";
import { Loader2 } from "lucide-react";
import { FC } from "react";
import RecipeCard from "./RecipeCard";

interface RecipesProps {
  isLoading: boolean;
  recipes?: Recipe[];
}

const Recipes: FC<RecipesProps> = ({ isLoading, recipes }) => {
  return isLoading ? (
    <Loader2 className="animate-spin w-10 h-10 mt-24 stroke-primary mx-auto" />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 mt-8">
      {recipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
