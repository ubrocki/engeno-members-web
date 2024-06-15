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
import SalutationSelection from "../SalutationSelection";

interface EditContactDialogProps {}

const EditContactDialog: React.FC<EditContactDialogProps> = () => {
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
      <DialogContent className="sm:max-w-[400px]  bg-slate-50">
        <DialogHeader>
          <DialogTitle>Kontakt</DialogTitle>
          <DialogDescription>
            Ändern Sie die Kontaktdaten und klicken Sie auf Speichern
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="type" className="text-left mb-2">
              Typ
            </Label>
            <SalutationSelection />
          </div>
          <div>
            <Label htmlFor="firstname" className="text-left">
              Vorname
            </Label>
            <Input
              id="firstname"
              name="firstname"
              type="text"
              defaultValue="Max"
            />
          </div>
          <div>
            <Label htmlFor="lastname" className="text-left">
              Nachname
            </Label>
            <Input
              id="nachname"
              name="nachname"
              type="text"
              defaultValue="Mustermann"
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
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email" className="text-left">
              E-Mail
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              defaultValue="max@example.com"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone" className="text-left">
              Telefon
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              defaultValue="05281 123456"
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

export default EditContactDialog;
