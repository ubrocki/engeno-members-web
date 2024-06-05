import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface SalutationSelectionProps {}

const SalutationSelection: React.FC<SalutationSelectionProps> = () => {
  return (
    <RadioGroup
      defaultValue="mister"
      name="salutation"
      className="grid grid-cols-2 gap-4 w-full max-w-sm items-center"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="mister" id="mister" />
        <Label htmlFor="mister">Herr</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="miss" id="miss" />
        <Label htmlFor="miss">Frau</Label>
      </div>
    </RadioGroup>
  );
};

export default SalutationSelection;
