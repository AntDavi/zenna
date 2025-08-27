"use client";

import { useState } from "react";

import { FinancialChartPie } from "./FinancialChartPie";
import { FinancialChartBars } from "./FinancialChartBars";
import { TransactionsHistoric } from "@/app/_components/TransactionsHistoric";
import { FinancialCard } from "./FinancialCard";
import { DateFilter } from "@/app/_components/DateFilter";
import {
  DateFilterType,
  DateRange,
  getDateRangeFromFilter,
} from "@/app/_types/dateFilter";

export function FinanceDashboard() {
  const [dateFilter, setDateFilter] = useState<DateFilterType>("month");
  const [customDateRange, setCustomDateRange] = useState<DateRange>();

  // Callback para quando o filtro mudar
  const handleDateFilterChange = (
    filter: DateFilterType,
    range?: DateRange
  ) => {
    const actualRange = getDateRangeFromFilter(filter, range);
    console.log("Filtro mudou:", filter, "Range:", actualRange);

    // Aqui você faria a lógica para filtrar os dados
    // Por exemplo: fetchTransactions(actualRange)
  };

  return (
    <div className="space-y-6">
      <DateFilter
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        customDateRange={customDateRange}
        setCustomDateRange={setCustomDateRange}
        onFilterChange={handleDateFilterChange}
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
        <FinancialCard
          type="income"
          title="Total de Receitas"
          value={8500.0}
          percentChange={12.5}
        />
        <FinancialCard
          type="expense"
          title="Total de Despesas"
          value={4250.5}
          percentChange={-8.2}
        />
        <FinancialCard
          type="balance"
          title="Saldo"
          value={4249.5}
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
