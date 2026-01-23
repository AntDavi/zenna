import AddTransactionBtn from "@/app/_components/add-transaction-btn";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  amount: number;
  icon: ReactNode;
  size?: "small" | "large";
  type?: "DEPOSITY" | "EXPENSE" | "INVESTMENT" | "BALANCE";
}

const SummaryCard = ({
  title,
  amount,
  icon,
  size = "small",
  type = "BALANCE",
}: SummaryCardProps) => {
  return (
    <Card className={`${size === "large" ? "bg-white/5" : ""}`}>
      <CardHeader className="flex-row items-center gap-2">
        <div
          className={`${type === "DEPOSITY" ? "bg-green-50" : type === "EXPENSE" ? "bg-red-50" : type === "INVESTMENT" ? "bg-muted-foreground/50" : "bg-none"} w-fit rounded-md p-1`}
        >
          {icon}
        </div>
        <p
          className={`text-muted-foreground ${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && <AddTransactionBtn />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
