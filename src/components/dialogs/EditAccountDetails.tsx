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

interface EditAccountDialogProps {}

const EditAccountDialog: React.FC<EditAccountDialogProps> = () => {
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
          <DialogTitle>Konto</DialogTitle>
          <DialogDescription>
            Ändern Sie die Kontoverbindung und klicken Sie auf Speichern
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="owner" className="text-left">
              Inhaber
            </Label>
            <Input
              id="owner"
              name="owner"
              type="text"
              defaultValue="Max Mustermann"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="institute" className="text-left">
              Institut
            </Label>
            <Input
              id="institute"
              name="institute"
              type="text"
              defaultValue="Sparkasse Bad Pyrmont"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="iban" className="text-left">
              IBAN
            </Label>
            <Input
              id="iban"
              name="iban"
              type="text"
              defaultValue="DE72 0000 1111 2222 3333 21"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="bic" className="text-left">
              BIC
            </Label>
            <Input id="bic" name="bic" type="text" defaultValue="SP1234X" />
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

export default EditAccountDialog;
