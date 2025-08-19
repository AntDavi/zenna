import { Clock, FilterIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { DialogAddTransaction } from "./DialogAddTransaction";
import DataTableTransactions from "./DataTableTransactions";
import { columns } from "./Columns";
import { mockTransactions } from "../_types/transaction";

export function TransactionsHistoric() {
    return (
        <Card className="w-full">
            <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Clock className="w-5 h-5 text-primary" />
                        </div>
                        Histórico de Transações
                    </CardTitle>

                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                            <FilterIcon className="w-4 h-4 mr-2" />
                            Filtros
                        </Button>

                        <div className="flex gap-2">
                            <div className="flex-1 sm:flex-none">
                                <DialogAddTransaction type="income" />
                            </div>
                            <div className="flex-1 sm:flex-none">
                                <DialogAddTransaction type="expense" />
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {/* Aqui você pode adicionar o conteúdo do histórico de transações em uma tabela */}
                <DataTableTransactions columns={columns} data={mockTransactions} />
            </CardContent>
        </Card>
    );
}
