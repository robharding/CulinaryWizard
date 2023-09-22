import { createRecipe } from "@/lib/api/recipes/mutations";
import { publicProcedure, router } from "../trpc";
import { newRecipeParams } from "@/lib/db/schema/recipe";
import * as z from "zod";
import { getRecipeById, getRecipes } from "@/lib/api/recipes/queries";

export const recipesRouter = router({
  createRecipe: publicProcedure
    .input(newRecipeParams)
    .mutation(async ({ input }) => {
      return createRecipe(input.url);
    }),
  getRecipe: publicProcedure
    .input(z.string())
    .query(async ({ input: recipeId }) => {
      return getRecipeById(recipeId);
    }),
  getRecipes: publicProcedure.query(async () => {
    return getRecipes();
  }),
});
