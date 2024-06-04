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

interface EditOrganisationDialogProps {}

const EditOrganisationDialog: React.FC<EditOrganisationDialogProps> = () => {
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
          <DialogTitle>Organisation</DialogTitle>
          <DialogDescription>
            Ändern Sie den Name der Organisation oder die Geschäftsadresse und
            klicken Sie auf Speichern
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="orgname" className="text-left">
              Organsisationsname
            </Label>
            <Input
              id="orgname"
              name="orgname"
              type="text"
              defaultValue="Musterorganisation GmbH"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 w-full max-w-sm items-center">
            <div className="col-span-2">
              <Label htmlFor="street" className="text-left">
                Strasse
              </Label>
              <Input
                id="street"
                name="street"
                type="text"
                defaultValue="Musterstrasse"
                className="w-full"
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="nr" className="text-left">
                Nummer
              </Label>
              <Input
                id="nr"
                name="nr"
                type="text"
                defaultValue="123"
                className="w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full max-w-sm items-center">
            <div className="col-span-1">
              <Label htmlFor="plz" className="text-left">
                PLZ
              </Label>
              <Input
                id="plz"
                name="plz"
                type="text"
                defaultValue="12345"
                className="w-full"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="nr" className="text-left">
                Stadt
              </Label>
              <Input
                id="town"
                name="town"
                type="text"
                defaultValue="Musterstadt"
                className="w-full"
              />
            </div>
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

export default EditOrganisationDialog;
