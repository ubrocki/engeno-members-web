import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { MemberPreview } from "@/models/MemberPreview";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

interface MembersTableProps {
  // define your props here
  members: MemberPreview[];
}

const MembersTable: React.FC<MembersTableProps> = ({ members }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Mitgliedsnr.</TableHead>
          <TableHead>Bezeichnung</TableHead>
          <TableHead>E-Mail</TableHead>
          <TableHead className="text-right">Anteile</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="font-medium">{member.id}</TableCell>
            <TableCell>
              <p>{member.label1}</p>
              <p>{member.label2}</p>
            </TableCell>
            <TableCell>{member.email}</TableCell>
            <TableCell className="text-right">{member.shares}</TableCell>
            <TableCell>
              <Link
                to={`/members/${member.id}`}
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

export default MembersTable;
