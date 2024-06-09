import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { InterestedPerson } from "@/models/InterestedPerson";

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
              <Link
                to={person.interestedId}
                className="inline-flex items-center border border-transparent text-sm font-medium rounded-md text-black bg-slate-100 hover:bg-slate-400"
              >
                <FaEye className="m-2" />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InterestedPersonsTable;
