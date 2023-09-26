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
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

interface NewRecipeDialogProps {
  children: React.ReactNode;
}

const NewRecipeDialog: FC<NewRecipeDialogProps> = ({ children }) => {
  const [url, setUrl] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();
  const { toast } = useToast();

  const { mutate: createRecipe, isLoading } =
    trpc.recipes.createRecipe.useMutation({
      onSuccess: (recipe) => {
        setIsOpen(false);
        return router.push(`/recipe/${recipe.id}`);
      },
      onError: (error) => {
        return toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(value) => !isLoading && setIsOpen(value)}
    >
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-inherit">
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
            isLoading={isLoading}
          >
            {!isLoading ? "Generate" : "One Moment..."}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewRecipeDialog;
