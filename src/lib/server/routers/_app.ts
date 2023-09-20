import { computersRouter } from "./computers";
import { router } from "../trpc";
import { recipesRouter } from "./recipes";

export const appRouter = router({
  computers: computersRouter,
  recipes: recipesRouter,
});

export type AppRouter = typeof appRouter;
