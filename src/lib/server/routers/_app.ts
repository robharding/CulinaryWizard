import { router } from "../trpc";
import { recipesRouter } from "./recipes";

export const appRouter = router({
  recipes: recipesRouter,
});

export type AppRouter = typeof appRouter;
