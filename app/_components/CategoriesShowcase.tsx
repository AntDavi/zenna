'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { getCategoriesByType, getAllCategories } from "../_types/categories";

export function CategoriesShowcase() {
    const incomeCategories = getCategoriesByType('income');
    const expenseCategories = getCategoriesByType('expense');
    const allCategories = getAllCategories();

    return (
        <div className="space-y-6 p-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Showcase das Categorias</h1>
                <p className="text-muted-foreground mt-2">
                    Total de {allCategories.length} categorias disponíveis
                </p>
            </div>

            {/* Categorias de Receita */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl text-green-600 flex items-center gap-2">
                        💰 Categorias de Receita ({incomeCategories.length})
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {incomeCategories.map((category) => (
                            <div
                                key={category.id}
                                className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/30 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl">{category.icon}</span>
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: category.color }}
                                        />
                                        <h3 className="font-semibold">{category.name}</h3>
                                    </div>
                                </div>
                                {category.description && (
                                    <p className="text-sm text-muted-foreground">
                                        {category.description}
                                    </p>
                                )}
                                <Badge
                                    variant="secondary"
                                    className="mt-2 text-xs"
                                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                                >
                                    {category.color}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Categorias de Despesa */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl text-red-600 flex items-center gap-2">
                        💸 Categorias de Despesa ({expenseCategories.length})
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {expenseCategories.map((category) => (
                            <div
                                key={category.id}
                                className="p-4 rounded-lg border bg-red-50 dark:bg-red-950/30 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl">{category.icon}</span>
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: category.color }}
                                        />
                                        <h3 className="font-semibold">{category.name}</h3>
                                    </div>
                                </div>
                                {category.description && (
                                    <p className="text-sm text-muted-foreground">
                                        {category.description}
                                    </p>
                                )}
                                <Badge
                                    variant="secondary"
                                    className="mt-2 text-xs"
                                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                                >
                                    {category.color}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Estatísticas */}
            <Card>
                <CardHeader>
                    <CardTitle>📊 Estatísticas das Categorias</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{allCategories.length}</div>
                            <p className="text-sm text-muted-foreground">Total</p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{incomeCategories.length}</div>
                            <p className="text-sm text-muted-foreground">Receitas</p>
                        </div>
                        <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
                            <div className="text-2xl font-bold text-red-600">{expenseCategories.length}</div>
                            <p className="text-sm text-muted-foreground">Despesas</p>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                                {new Set(allCategories.map(c => c.color)).size}
                            </div>
                            <p className="text-sm text-muted-foreground">Cores únicas</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
