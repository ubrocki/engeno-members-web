import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { InterestedPerson } from "@/models/InterestedPerson";
import EditInterestedPersonDialog from "./dialogs/EditInterestedPerson";
import { Button } from "./ui/button";
import { AiTwotoneDelete } from "react-icons/ai";

interface InterestedPersonsTableProps {
  // define your props here
  persons: InterestedPerson[];
}

const InterestedPersonsTable: React.FC<InterestedPersonsTableProps> = ({
  persons,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nachname</TableHead>
          <TableHead>Vorname</TableHead>
          <TableHead>E-Mail</TableHead>
          <TableHead className="text-right">Telefon</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {persons.map((person) => (
          <TableRow key={person.interestedId}>
            <TableCell className="font-medium">{person.lastname}</TableCell>
            <TableCell>
              <p>{person.firstname}</p>
            </TableCell>
            <TableCell>{person.email}</TableCell>
            <TableCell className="text-right">{person.phone}</TableCell>
            <TableCell>
              <EditInterestedPersonDialog />
              <Button
                variant="outline"
                className="p-2 bg-slate-100 hover:bg-slate-400"
              >
                <AiTwotoneDelete />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InterestedPersonsTable;
