import { createRecipe } from "@/lib/api/recipes/mutations";
import { publicProcedure, router } from "../trpc";
import { getComputers } from "@/lib/api/computers/queries";
import { z } from "zod";
export const recipesRouter = router({
  createRecipe: publicProcedure
    .input(z.object({ url: z.string() }))
    .mutation(async ({ input }) => {
      return createRecipe(input.url);
    }),
});
