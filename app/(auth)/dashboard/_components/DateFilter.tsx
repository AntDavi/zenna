import { Card } from "@/app/_components/ui/card";
import { Calendar, Clock, CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/_components/ui/popover";
import { Button } from "@/app/_components/ui/button";
import { Calendar as CalendarComponent } from "@/app/_components/ui/calendar";
import { DateFilterType, DateRange } from "./FinanceDashboard";

interface DateFilterProps {
    dateFilter: DateFilterType;
    setDateFilter: (filter: DateFilterType) => void;
    // customDateRange: DateRange;
    // setCustomDateRange: (range: DateRange) => void;
}

const filterOptions = [
    { id: "today" as DateFilterType, label: "Hoje", icon: Clock },
    { id: "week" as DateFilterType, label: "7 dias", icon: CalendarDays },
    { id: "month" as DateFilterType, label: "Este mês", icon: Calendar },
    { id: "custom" as DateFilterType, label: "Personalizado", icon: Calendar },
];

export function DateFilter({
    dateFilter,
    setDateFilter
}: DateFilterProps) {
    return (
        <Card className="p-4 bg-gradient-card shadow-soft border-border">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-card-foreground">Período</h3>
                </div>

                <div className="flex items-center gap-2">
                    {filterOptions.map((option) => (
                        <Button
                            key={option.id}
                            variant={dateFilter === option.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setDateFilter(option.id)}
                            className={`
                transition-all duration-200
                ${dateFilter === option.id
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