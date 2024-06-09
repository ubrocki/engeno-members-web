import { ShareTransaction, TransactionType } from "@/models/ShareTransaction";

const TRANSACTIONS: ShareTransaction[] = [
  {
    id: "1",
    typeOfTransaction: TransactionType.SUBSCRIPTION,
    dateOfTransaction: new Date("2022-01-01"),
    noOfShares: 5,
    valuePerShare: 500,
  },
  {
    id: "2",
    typeOfTransaction: TransactionType.CHECK_IN,
    dateOfTransaction: new Date("2022-01-12"),
    noOfShares: 5,
    valuePerShare: 500,
  },
  {
    id: "3",
    typeOfTransaction: TransactionType.SUBSCRIPTION,
    dateOfTransaction: new Date("2023-03-01"),
    noOfShares: 2,
    valuePerShare: 500,
  },
  {
    id: "4",
    typeOfTransaction: TransactionType.CHECK_IN,
    dateOfTransaction: new Date("2023-03-12"),
    noOfShares: 2,
    valuePerShare: 500,
  },
  {
    id: "5",
    typeOfTransaction: TransactionType.DISMISS,
    dateOfTransaction: new Date("2024-01-03"),
    noOfShares: 2,
    valuePerShare: 500,
  },
  {
    id: "6",
    typeOfTransaction: TransactionType.CHECK_OUT,
    dateOfTransaction: new Date("2024-01-04"),
    noOfShares: 2,
    valuePerShare: 500,
  },
];

export default TRANSACTIONS;
