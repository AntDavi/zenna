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
  balance: number;
  depositsTotal: number;
  expensesTotal: number;
  investmentsTotal: number;
}

const SummaryCards = async ({
  month,
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
}: SummaryCards) => {
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
