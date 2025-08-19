import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function FinancialCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Total de Receitas</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">R$ 12.345,67</p>
                <span>+12.5% vs periodo anterior</span>
            </CardContent>
        </Card>
    );
}
