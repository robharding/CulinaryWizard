import * as z from "zod"
import { CompleteRecipe, relatedRecipeSchema, CompleteUser, relatedUserSchema } from "./index"

export const collectionSchema = z.object({
  id: z.string(),
  userId: z.string(),
})

export interface CompleteCollection extends z.infer<typeof collectionSchema> {
  recipes: CompleteRecipe[]
  user: CompleteUser
}

/**
 * relatedCollectionSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCollectionSchema: z.ZodSchema<CompleteCollection> = z.lazy(() => collectionSchema.extend({
  recipes: relatedRecipeSchema.array(),
  user: relatedUserSchema,
}))
