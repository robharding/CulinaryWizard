import { db } from "../../db";
import { TRPCError } from "@trpc/server";

export const getRecipeById = async (id: string) => {
  const recipe = await db.recipe.findUnique({
    where: {
      id,
    },
  });

  if (!recipe) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Recipe not found",
    });
  }

  return recipe;
};

export const getRecipes = async () => {
  const recipes = await db.recipe.findMany({
    take: 16,
    orderBy: {
      createdAt: "desc",
    },
  });

  return recipes;
};

export const getRecipesInUserCollection = async (userId: string) => {
  const recipes = await db.recipe.findMany({
    where: {
      collections: {
        some: {
          userId,
        },
      },
    },
  });

  return recipes;
};
