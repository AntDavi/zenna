import { FilterIcon, Paperclip } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { DialogAddTransaction } from "./DialogAddTransaction";

export function TransactionsHistoric() {
    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Paperclip className="w-5 h-5 text-primary" />
                    </div>
                    Histórico de Transações
                </CardTitle>
                <div className="flex flex-row items-center gap-2">
                    <Button>
                        <FilterIcon className="w-4 h-4 mr-2" />
                        Filtros
                    </Button>
                    <DialogAddTransaction type="income" />
                    <DialogAddTransaction type="expense" />
                </div>
            </CardHeader>
            <CardContent>
                {/* Aqui você pode adicionar o conteúdo do histórico de transações */}
            </CardContent>
        </Card>
    );
}
