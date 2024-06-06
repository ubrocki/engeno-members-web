import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShareTransaction, fromTypeToText } from "@/models/ShareTransaction";

interface ShareTransactionsTableProps {
  // define your props here
  transactions: ShareTransaction[];
}

const ShareTransactionsTable: React.FC<ShareTransactionsTableProps> = ({
  transactions,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Buchungstyp</TableHead>
          <TableHead>Datum</TableHead>
          <TableHead className="text-right">Anzahl</TableHead>
          <TableHead className="text-right">Wert pro Anteil</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">
              {fromTypeToText(transaction.typeOfTransaction)}
            </TableCell>
            <TableCell>
              {transaction.dateOfTransaction.toLocaleDateString("de-DE")}
            </TableCell>
            <TableCell className="text-right">
              {transaction.noOfShares}
            </TableCell>
            <TableCell className="text-right">
              {transaction.valuePerShare}
            </TableCell>
            <TableCell>
              <Link
                to={transaction.id}
                className="inline-flex items-center border border-transparent text-sm font-medium rounded-md text-black bg-slate-100 hover:bg-slate-400"
              >
                <FaEdit className="m-2" />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ShareTransactionsTable;
