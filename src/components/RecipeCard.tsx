import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Recipe } from "@/lib/db/schema/recipe";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Clock } from "lucide-react";
import Tags from "./Tags";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <Card className="h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="truncate" title={recipe.title}>
            {recipe.title}
          </CardTitle>
          <CardDescription>
            <Tags tags={recipe.tags} />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3">{recipe.description}</p>
        </CardContent>
        <CardFooter>
          <Clock className="w-3 h-3 mr-2" />
          <span className="italic">{recipe.cookTime}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipeCard;
