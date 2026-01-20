import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

const SummaryCards = async () => {
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "DEPOSITY" },
        _sum: { amount: true },
      })
    )._sum?.amount
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "EXPENSE" },
        _sum: { amount: true },
      })
    )._sum?.amount
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )._sum?.amount
  );

  const balance = depositsTotal - expensesTotal - investmentsTotal;

  return (
    <div className="space-y-6">
      {/* Primeiro card */}
      <SummaryCard
        title="Saldo"
        amount={balance}
        icon={<WalletIcon size={22} />}
        size="large"
      />

      {/* Outros */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          title="Receita"
          amount={depositsTotal}
          icon={<TrendingUpIcon size={16} className="text-primary" />}
        />
        <SummaryCard
          title="Despesas"
          amount={expensesTotal}
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
        />
        <SummaryCard
          title="Investimentos"
          amount={investmentsTotal}
          icon={<PiggyBankIcon size={16} />}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
