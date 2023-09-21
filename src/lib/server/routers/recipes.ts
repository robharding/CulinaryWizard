import { createRecipe } from "@/lib/api/recipes/mutations";
import { publicProcedure, router } from "../trpc";
import { newRecipeParams } from "@/lib/db/schema/recipe";

export const recipesRouter = router({
  createRecipe: publicProcedure
    .input(newRecipeParams)
    .mutation(async ({ input }) => {
      return createRecipe(input.url);
    }),
});
