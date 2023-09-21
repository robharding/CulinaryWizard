import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const recipeSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  cuisine: z.string(),
  cookTime: z.string(),
  ingredients: z.string().array(),
  method: z.string().array(),
  nutritionalInfo: z.string().array(),
  prepTime: z.string(),
  tags: z.string().array(),
  sourceUrl: z.string(),
  userId: z.string(),
})

export interface CompleteRecipe extends z.infer<typeof recipeSchema> {
  user: CompleteUser
}

/**
 * relatedRecipeSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedRecipeSchema: z.ZodSchema<CompleteRecipe> = z.lazy(() => recipeSchema.extend({
  user: relatedUserSchema,
}))
