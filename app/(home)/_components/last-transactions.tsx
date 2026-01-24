import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_constants/transactions";
import { formatCurrency } from "@/app/_utils/currency";
import { Transaction } from "@/app/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";

interface LastTransactionsProps {
  lastTransactions: Transaction[];
}

const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  const getAmountColor = (transaction: Transaction) => {
    if (transaction.type === "DEPOSITY") {
      return "text-green-500";
    } else if (transaction.type === "EXPENSE") {
      return "text-red-500";
    } else if (transaction.type === "INVESTMENT") {
      return "text-white";
    }
  };

  const getAmountPrefix = (transaction: Transaction) => {
    if (transaction.type === "DEPOSITY") {
      return "+ ";
    }
    return "- ";
  };

  return (
    <Card className="rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimas Transações</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/transactions">Ver todas</Link>
        </Button>
      </CardHeader>
      <ScrollArea>
        <CardContent className="space-y-6">
          {lastTransactions.map((transaction) => (
            <div
              className="flex items-center justify-between"
              key={transaction.id}
            >
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-white/5 p-3">
                  <Image
                    src={
                      TRANSACTION_PAYMENT_METHOD_ICONS[
                        transaction.paymentMethod
                      ]
                    }
                    height={20}
                    width={20}
                    alt="Pix"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">{transaction.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {new Date(transaction.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <p className={`text-sm font-bold ${getAmountColor(transaction)}`}>
                {getAmountPrefix(transaction)}
                {formatCurrency(Number(transaction.amount))}
              </p>
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default LastTransactions;
