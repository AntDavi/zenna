import { Card } from "./ui/card";
import { Calendar, Clock, CalendarDays } from "lucide-react";
import { Button } from "./ui/button";
import { DateFilterType, DateRange } from "../_types/dateFilter";

interface DateFilterProps {
  dateFilter: DateFilterType;
  setDateFilter: (filter: DateFilterType) => void;
  customDateRange?: DateRange;
  setCustomDateRange?: (range: DateRange) => void;
  onFilterChange?: (filter: DateFilterType, range?: DateRange) => void;
}

const filterOptions = [
  { id: "today" as DateFilterType, label: "Hoje", icon: Clock },
  { id: "week" as DateFilterType, label: "7 dias", icon: CalendarDays },
  { id: "month" as DateFilterType, label: "Este mês", icon: Calendar },
  { id: "custom" as DateFilterType, label: "Personalizado", icon: Calendar },
];

export function DateFilter({
  dateFilter,
  setDateFilter,
  customDateRange,
  setCustomDateRange,
  onFilterChange,
}: DateFilterProps) {
  const handleFilterChange = (newFilter: DateFilterType) => {
    setDateFilter(newFilter);

    // Callback opcional para notificar mudanças
    if (onFilterChange) {
      onFilterChange(newFilter, customDateRange);
    }
  };

  return (
    <Card className="p-4 bg-gradient-card shadow-soft border-border">
      <div className="flex items-center justify-between md:flex-row flex-col space-y-3 md:space-y-0">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-card-foreground">Período</h3>
        </div>

        <div className="flex items-center gap-2">
          {filterOptions.map((option) => (
            <Button
              key={option.id}
              variant={dateFilter === option.id ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange(option.id)}
              className={`
                transition-all duration-200
                ${
                  dateFilter === option.id
                    ? "shadow-soft bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                }`}
            >
              <option.icon className="w-4 h-4 mr-2" />
              {option.label}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
