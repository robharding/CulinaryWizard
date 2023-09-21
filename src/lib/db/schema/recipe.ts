import { recipeSchema } from "@/zodAutoGenSchemas";
import * as z from "zod";

export const newRecipeSchema = recipeSchema.omit({
  id: true,
});
export const newRecipeParams = z.object({
  url: z.string(),
});

export type Recipe = z.infer<typeof recipeSchema>;
export type NewRecipe = z.infer<typeof newRecipeSchema>;
export type NewRecipeParams = z.infer<typeof newRecipeParams>;
