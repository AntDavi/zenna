'use client'

import { useState } from "react";
import { DateFilter } from "./DateFilter";
import { FinancialChartPie } from "./FinancialChartPie";
import { FinancialChartBars } from "./FinancialChartBars";
import { TransactionsHistoric } from "@/app/_components/TransactionsHistoric";
import { FinancialCard } from "@/app/_components/FinancialCard";

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
                <FinancialCard />
                <FinancialCard />
                <FinancialCard />
                <FinancialCard />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FinancialChartPie />
                <FinancialChartBars />
            </div>
            <TransactionsHistoric />
        </div>
    );
}
