import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCards {
  month: string;
}

const SummaryCards = async ({ month }: SummaryCards) => {
  const where = {
    date: {
      gte: new Date(new Date().getFullYear(), Number(month) - 1, 1),
      lt: new Date(new Date().getFullYear(), Number(month), 1),
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSITY" },
        _sum: { amount: true },
      })
    )._sum?.amount
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )._sum?.amount
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
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
          type="DEPOSITY"
        />
        <SummaryCard
          title="Despesas"
          amount={expensesTotal}
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          type="EXPENSE"
        />
        <SummaryCard
          title="Investimentos"
          amount={investmentsTotal}
          icon={<PiggyBankIcon size={16} />}
          type="INVESTMENT"
        />
      </div>
    </div>
  );
};

export default SummaryCards;
