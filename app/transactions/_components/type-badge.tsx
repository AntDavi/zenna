import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@/app/generated/prisma/browser";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSITY) {
    return (
      <Badge className="bg-muted text-primary font-bold">
        <CircleIcon className="fill-primary mr-1" size={8} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 text-danger font-bold">
        <CircleIcon className="fill-danger mr-1" size={8} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted font-bold text-white">
      <CircleIcon className="mr-1 fill-white" size={8} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
