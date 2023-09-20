import React, { FC } from "react";
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

interface NewRecipeDialogProps {
  children: React.ReactNode;
}

const NewRecipeDialog: FC<NewRecipeDialogProps> = ({ children }) => {
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
            <Label htmlFor="name" className="text-right">
              URL
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Generate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewRecipeDialog;
