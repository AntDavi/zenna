'use client'

import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { TrendingUp, TrendingDown, Calendar as CalendarIcon, Save, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "../_lib/utils";
import Link from "next/link";

interface TransactionForm {
    amount: string;
    description: string;
    date: Date;
    category_id: string;
}

interface DialogTransactionProps {
    type: 'income' | 'expense';
    trigger?: React.ReactNode;
}

// Categorias de exemplo - substitua pela sua fonte de dados
const mockCategories = {
    income: [
        { id: '1', name: 'Salário', color: '#22c55e' },
        { id: '2', name: 'Freelance', color: '#3b82f6' },
        { id: '3', name: 'Investimentos', color: '#8b5cf6' },
        { id: '4', name: 'Outros', color: '#6b7280' },
    ],
    expense: [
        { id: '5', name: 'Alimentação', color: '#ef4444' },
        { id: '6', name: 'Transporte', color: '#f59e0b' },
        { id: '7', name: 'Moradia', color: '#06b6d4' },
        { id: '8', name: 'Saúde', color: '#ec4899' },
        { id: '9', name: 'Entretenimento', color: '#8b5cf6' },
    ],
};

export function DialogTransaction({ type, trigger }: DialogTransactionProps) {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<TransactionForm>({
        amount: '',
        description: '',
        date: new Date(),
        category_id: ''
    });
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const isIncome = type === 'income';
    const categories = mockCategories[type];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.amount || !form.category_id) {
            alert("Por favor, preencha o valor e selecione uma categoria.");
            return;
        }

        const amount = parseFloat(form.amount.replace(',', '.'));
        if (isNaN(amount) || amount <= 0) {
            alert("Por favor, insira um valor válido maior que zero.");
            return;
        }

        // Aqui você implementaria a lógica para salvar a transação
        console.log('Salvando transação:', {
            amount,
            description: form.description,
            date: format(form.date, 'yyyy-MM-dd'),
            category_id: form.category_id,
            type: type,
        });

        // Reset form and close dialog
        setForm({
            amount: '',
            description: '',
            date: new Date(),
            category_id: ''
        });
        setOpen(false);
    };

    const handleAmountChange = (value: string) => {
        // Remove caracteres não numéricos exceto vírgula e ponto
        const cleanValue = value.replace(/[^\d.,]/g, '');
        setForm(prev => ({ ...prev, amount: cleanValue }));
    };

    const formatCurrency = (value: string) => {
        if (!value) return '';
        const numericValue = parseFloat(value.replace(',', '.'));
        if (isNaN(numericValue)) return value;
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(numericValue);
    };

    const defaultTrigger = (
        <Button
            className={`
        transition-all duration-300 ease-in-out rounded-lg group w-full flex justify-start cursor-pointer
        ${isIncome
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 hover:border-green-300 dark:hover:border-green-600  hover:shadow-md'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40 hover:border-red-300 dark:hover:border-red-600  hover:shadow-md'
                }
        px-3 py-2.5 font-medium
        `}
        >
            {isIncome ? (
                <Plus className="w-4 h-4 mr-2 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300" />
            ) : (
                <Minus className="w-4 h-4 mr-2 text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300" />
            )}
            Nova {isIncome ? 'Receita' : 'Despesa'}
        </Button>
    );

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || defaultTrigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold flex items-center gap-3">
                        <div className={`
                p-3 rounded-lg
                ${isIncome ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'}
            `}>
                            {isIncome ? <TrendingUp className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />}
                        </div>
                        Nova {isIncome ? 'Receita' : 'Despesa'}
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Amount */}
                    <div className="space-y-2">
                        <Label htmlFor="amount" className="text-sm font-medium">
                            Valor *
                        </Label>
                        <div className="relative">
                            <Input
                                id="amount"
                                type="text"
                                placeholder="0,00"
                                value={form.amount}
                                onChange={(e) => handleAmountChange(e.target.value)}
                                className="text-lg font-semibold pr-20"
                                required
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">
                                {form.amount && formatCurrency(form.amount)}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-sm font-medium">
                            Descrição
                        </Label>
                        <Textarea
                            id="description"
                            placeholder={`Descreva esta ${isIncome ? 'receita' : 'despesa'}...`}
                            value={form.description}
                            onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                            rows={3}
                        />
                    </div>

                    {/* Date */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">
                            Data *
                        </Label>
                        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !form.date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {form.date ? (
                                        format(form.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                                    ) : (
                                        <span>Selecione uma data</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={form.date}
                                    onSelect={(date) => {
                                        if (date) {
                                            setForm(prev => ({ ...prev, date }));
                                            setIsCalendarOpen(false);
                                        }
                                    }}
                                    locale={ptBR}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">
                            Categoria *
                        </Label>
                        <Select
                            value={form.category_id}
                            onValueChange={(value) => setForm(prev => ({ ...prev, category_id: value }))}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.id}>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: category.color }}
                                            />
                                            {category.name}
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Link className="text-sm text-blue-600 hover:underline" href="/settings">
                            Criar uma categoria
                        </Link>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                            className="flex-1"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            className={`
                flex-1
                ${isIncome
                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                    : 'bg-red-600 hover:bg-red-700 text-white'
                                }
                `}
                        >
                            <Save className="w-4 h-4 mr-2" />
                            Salvar
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
