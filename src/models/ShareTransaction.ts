export enum TransactionType {
  SUBSCRIPTION = "subscription",
  CHECK_IN = "check-in",
  DISMISS = "dismiss",
  CHECK_OUT = "check-out",
}

export interface ShareTransaction {
  id: string;
  typeOfTransaction: TransactionType;
  dateOfTransaction: Date;
  noOfShares: number;
  valuePerShare: number;
}

export function fromTypeToText(type: TransactionType): string {
  switch (type) {
    case TransactionType.SUBSCRIPTION:
      return "Zeichnung";
    case TransactionType.CHECK_IN:
      return "Einbuchung";
    case TransactionType.DISMISS:
      return "Kündigung";
    case TransactionType.CHECK_OUT:
      return "Ausbuchung";
  }
}
