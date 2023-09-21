import React, { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { trpc } from "@/lib/trpc/client";

interface NewRecipeDialogProps {
  children: React.ReactNode;
}

const NewRecipeDialog: FC<NewRecipeDialogProps> = ({ children }) => {
  const [url, setUrl] = useState<string>("");

  const { mutate: createRecipe, isLoading } =
    trpc.recipes.createRecipe.useMutation();

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Import a Recipe</DialogTitle>
          <DialogDescription>
            Cut out the extra fluff and generate simple recipe instructions
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              URL
            </Label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => createRecipe({ url })}
            disabled={isLoading}
          >
            Generate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewRecipeDialog;
