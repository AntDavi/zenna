export type DateFilterType = "today" | "week" | "month" | "custom";

export interface DateRange {
  from: Date;
  to: Date;
}

export interface DateFilterState {
  type: DateFilterType;
  customRange?: DateRange;
}

// Utilitários para conversão de filtro em range de datas
export const getDateRangeFromFilter = (
  filter: DateFilterType,
  customRange?: DateRange
): DateRange => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  switch (filter) {
    case "today":
      return {
        from: today,
        to: new Date(today.getTime() + 24 * 60 * 60 * 1000 - 1),
      };

    case "week":
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      return {
        from: weekAgo,
        to: now,
      };

    case "month":
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      const monthEnd = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0,
        23,
        59,
        59
      );
      return {
        from: monthStart,
        to: monthEnd,
      };

    case "custom":
      return (
        customRange || {
          from: today,
          to: now,
        }
      );

    default:
      return {
        from: today,
        to: now,
      };
  }
};
