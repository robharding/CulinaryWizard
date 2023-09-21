import { OpenAI } from "openai";
import { db } from "../../db";
import { getUserAuth } from "@/lib/auth/utils";
import { TRPCError } from "@trpc/server";
import { NewRecipe, newRecipeSchema } from "@/lib/db/schema/recipe";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export const createRecipe = async (url: string) => {
  const { session } = await getUserAuth();

  if (!session?.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to create a recipe",
    });
  }

  // check to see if a recipe with this url already exists
  const exists = await db.recipe.findFirst({
    where: {
      sourceUrl: url,
    },
  });

  if (exists) {
    // check if the user has a collection
    let collection = await db.collection.findFirst({
      where: {
        userId: session.user.id,
      },
    });

    // if not, create one
    if (!collection) {
      collection = await db.collection.create({
        data: {
          userId: session?.user.id,
        },
      });
    }

    // add the recipe to the collection
    await db.collection.update({
      where: {
        id: collection.id,
      },
      data: {
        recipes: {
          connect: {
            id: exists.id,
          },
        },
      },
    });

    return exists;
  }

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You will be provided a link to a recipe. You will need to visit the page and extract the recipe. The recipe should be returned in JSON format and match the following schema:
          {
            title: v.string(),
            description: v.string(),
            cuisine: v.string(),
            cookTime: v.string(),
            ingredients: v.array(v.string()),
            method: v.array(v.string()),
            nutritionalInfo: v.string(),
            prepTime: v.string(),
            tags: v.array(v.string()),
            sourceUrl: v.string(),
          }

          If the page does not contain a recipe, please return null, otherwise make sure you always return valid JSON. Provide a maximum of 3 tags and make the description a maximum of 100 characters.
          `,
      },
      { role: "user", content: url },
    ],
    model: "gpt-4",
  });

  const message = completion.choices[0].message.content;
  if ([null, "null"].includes(message) || !message) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "No recipe found on page",
    });
  }

  let recipeJSON: NewRecipe;
  try {
    recipeJSON = newRecipeSchema.parse(JSON.parse(message));
  } catch (e) {
    console.log(`ERROR`);
    console.log(message);
    throw new TRPCError({
      code: "PARSE_ERROR",
      message: "Invalid JSON returned from recipe",
    });
  }

  // create the recipe
  const recipe = await db.recipe.create({
    data: {
      ...recipeJSON,
      userId: session.user.id,
    },
  });

  // check if the user has a collection
  let collection = await db.collection.findFirst({
    where: {
      userId: session.user.id,
    },
  });

  // if not, create one
  if (!collection) {
    collection = await db.collection.create({
      data: {
        userId: session?.user.id,
      },
    });
  }

  // add the recipe to the collection
  await db.collection.update({
    where: {
      id: collection.id,
    },
    data: {
      recipes: {
        connect: {
          id: recipe.id,
        },
      },
    },
  });

  return recipe;
};
