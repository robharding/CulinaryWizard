"use client";

import { trpc } from "@/lib/trpc/client";
import { Clock, Loader2 } from "lucide-react";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface RecipeFeedProps {}

const RecipeFeed: FC<RecipeFeedProps> = ({}) => {
  const { data: recipes, isLoading } = trpc.recipes.getRecipes.useQuery();

  return isLoading ? (
    <Loader2 className="animate-spin" />
  ) : (
    <div className="max-w-3xl px-4 mx-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12">
      {recipes?.map((recipe) => (
        <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
          <Card>
            <CardHeader>
              <CardTitle className="truncate">{recipe.title}</CardTitle>
              <CardDescription className="pt-1 truncate">
                {recipe.tags.map((tag) => (
                  <Badge key={tag} className="mr-2" variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{recipe.description}</p>
            </CardContent>
            <CardFooter>
              <Clock className="w-4 h-4 mr-2" />
              {recipe.cookTime}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default RecipeFeed;
