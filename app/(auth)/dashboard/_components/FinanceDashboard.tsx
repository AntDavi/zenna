'use client'

import { useState } from "react";
import { DateFilter } from "./DateFilter";
import { FinancialChartPie } from "./FinancialChartPie";
import { FinancialChartBars } from "./FinancialChartBars";
import { TransactionsHistoric } from "@/app/_components/TransactionsHistoric";

export type DateFilterType = "today" | "week" | "month" | "custom";
export interface DateRange {
    from: Date;
    to: Date;
}

export function FinanceDashboard() {
    const [dateFilter, setDateFilter] = useState<DateFilterType>("month");
    return (
        <div className="p-8 space-x-6 space-y-6">
            <DateFilter
                dateFilter={dateFilter}
                setDateFilter={setDateFilter}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FinancialChartPie />
                <FinancialChartBars />
            </div>
            <TransactionsHistoric />
        </div>
    );
}
