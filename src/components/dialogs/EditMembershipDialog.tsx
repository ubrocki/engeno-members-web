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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Mitgliedschaft</DialogTitle>
          <DialogDescription>
            Ändern Sie den Typ oder das Beitrittsdatum und klicken Sie auf
            Speichern
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstname" className="text-right">
              Firstname
            </Label>
            <Input
              id="firstname"
              name="firstname"
              defaultValue="Pedro"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastname" className="text-right">
              Lastname
            </Label>
            <Input
              id="lastname"
              name="lastname"
              defaultValue="Duarte"
              className="col-span-3"
            />
          </div>
          <DialogFooter>
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
