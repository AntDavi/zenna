"use client";

import { DateFilter } from "@/app/_components/DateFilter";
import { TransactionsHistoric } from "@/app/_components/TransactionsHistoric";
import { useState } from "react";
import {
  DateFilterType,
  DateRange,
  getDateRangeFromFilter,
} from "@/app/_types/dateFilter";

export default function Transactions() {
  const [dateFilter, setDateFilter] = useState<DateFilterType>("month");
  const [customDateRange, setCustomDateRange] = useState<DateRange>();

  const handleDateFilterChange = (
    filter: DateFilterType,
    range?: DateRange
  ) => {
    const actualRange = getDateRangeFromFilter(filter, range);
    console.log("Filtro de transações mudou:", filter, "Range:", actualRange);

    // Aqui você faria a lógica para filtrar as transações
  };

  return (
    <div className="space-y-6">
      {/* Conteúdo da página de transações */}
      <DateFilter
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        customDateRange={customDateRange}
        setCustomDateRange={setCustomDateRange}
        onFilterChange={handleDateFilterChange}
      />
      <TransactionsHistoric />
    </div>
  );
}
