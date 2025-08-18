'use client'

import { useState } from "react";
import { DateFilter } from "./DateFilter";
import { FinancialChartPie } from "./FinancialChartPie";

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

            <FinancialChartPie />
        </div>
    );
}
