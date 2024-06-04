import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import React from "react";
import { Button } from "../ui/button";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import TypeOfMemberSelection from "../TypeOfMemberSelection";

interface EditMembershipDialogProps {}

const EditMembershipDialog: React.FC<EditMembershipDialogProps> = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted", data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Editieren</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Mitgliedschaft</DialogTitle>
          <DialogDescription>
            Ändern Sie den Typ oder das Beitrittsdatum und klicken Sie auf
            Speichern
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Typ
            </Label>
            <TypeOfMemberSelection />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 mt-2">
            <Label htmlFor="admission" className="text-right">
              Mitglied seid
            </Label>
            <Input
              id="admission"
              name="admission"
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              className="col-span-3"
            />
          </div>
          <DialogFooter className="mt-2">
            <DialogClose asChild>
              <Button
                type="submit"
                className="w-30 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Speichern
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Abbrechen
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditMembershipDialog;
