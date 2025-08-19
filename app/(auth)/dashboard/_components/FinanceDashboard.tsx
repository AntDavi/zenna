'use client'

import { useState } from "react";
import { DateFilter } from "./DateFilter";
import { FinancialChartPie } from "./FinancialChartPie";
import { FinancialChartBars } from "./FinancialChartBars";
import { TransactionsHistoric } from "@/app/_components/TransactionsHistoric";
import { FinancialCard } from "./FinancialCard";

export type DateFilterType = "today" | "week" | "month" | "custom";
export interface DateRange {
    from: Date;
    to: Date;
}

export function FinanceDashboard() {
    const [dateFilter, setDateFilter] = useState<DateFilterType>("month");
    return (
        <div className="space-y-6">
            <DateFilter
                dateFilter={dateFilter}
                setDateFilter={setDateFilter}
            />
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
                <FinancialCard
                    type="income"
                    title="Total de Receitas"
                    value={8500.00}
                    percentChange={12.5}
                />
                <FinancialCard
                    type="expense"
                    title="Total de Despesas"
                    value={4250.50}
                    percentChange={-8.2}
                />
                <FinancialCard
                    type="balance"
                    title="Saldo"
                    value={4249.50}
                    percentChange={4.3}
                />
                <FinancialCard
                    type="neutral"
                    title="Transações"
                    value={28}
                    percentChange={2}
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FinancialChartPie />
                <FinancialChartBars />
            </div>
            <TransactionsHistoric />
        </div>
    );
}
