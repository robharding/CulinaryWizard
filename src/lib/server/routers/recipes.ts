import { createRecipe } from "@/lib/api/recipes/mutations";
import { publicProcedure, router } from "../trpc";
import { newRecipeParams } from "@/lib/db/schema/recipe";
import * as z from "zod";
import {
  getRecipeById,
  getRecipes,
  getRecipesInUserCollection,
} from "@/lib/api/recipes/queries";

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
  getRecipesInUserCollection: publicProcedure.query(async ({ ctx }) => {
    return ctx.session?.user
      ? getRecipesInUserCollection(ctx.session.user.id)
      : Promise.resolve([]);
  }),
});
