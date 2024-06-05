import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface TypeOfMemberSelectionProps {}

const TypeOfMemberSelection: React.FC<TypeOfMemberSelectionProps> = () => {
  return (
    <RadioGroup
      defaultValue="private"
      name="tmember"
      className="grid grid-cols-2 gap-4 w-full max-w-sm items-center"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="institutionel" id="institutionel" />
        <Label htmlFor="institutionel">Institutionell</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="private" id="private" />
        <Label htmlFor="private">Privat</Label>
      </div>
    </RadioGroup>
  );
};

export default TypeOfMemberSelection;
