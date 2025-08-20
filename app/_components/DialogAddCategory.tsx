'use client'

import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Save, Palette, PlusCircle, Smile } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import EmojiPicker from 'emoji-picker-react';
import { HexColorPicker } from "react-colorful";


const categorySchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(50, "Nome deve ter no máximo 50 caracteres"),
    description: z.string().optional(),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Cor deve ser um código hex válido"),
    icon: z.string().min(1, "Ícone é obrigatório"),
    type: z.enum(["income", "expense"], {
        message: "Tipo é obrigatório",
    }),
});

type CategoryForm = z.infer<typeof categorySchema>;

interface DialogAddCategoryProps {
    trigger?: React.ReactNode;
}



export function DialogAddCategory({ trigger }: DialogAddCategoryProps) {
    const [open, setOpen] = useState(false);
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
    const [colorPickerOpen, setColorPickerOpen] = useState(false);

    const form = useForm<CategoryForm>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: "",
            description: "",
            color: "#3b82f6",
            icon: "",
            type: "expense",
        },
    });

    const onSubmit = (data: CategoryForm) => {
        // Aqui você implementaria a lógica para salvar a categoria
        console.log('Salvando categoria:', {
            id: crypto.randomUUID(),
            name: data.name,
            color: data.color,
            icon: data.icon,
            description: data.description,
            type: data.type,
        });

        form.reset();
        setOpen(false);
    };

    const watchedColor = form.watch("color");
    const watchedIcon = form.watch("icon");
    const watchedType = form.watch("type");

    const defaultTrigger = (
        <Button variant="outline" className="">
            <PlusCircle className="w-4 h-4 mr-2" />
            Nova Categoria
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
                        <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            <Palette className="w-6 h-6" />
                        </div>
                        Nova Categoria
                    </DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        {/* Type */}
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tipo *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selecione o tipo" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="income">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                                    <span>Receita</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="expense">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                    <span>Despesa</span>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome *</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Digite o nome da categoria"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Descrição</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Descreva esta categoria..."
                                            rows={3}
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Icon */}
                        <FormField
                            control={form.control}
                            name="icon"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ícone *</FormLabel>
                                    <FormControl>
                                        <div>
                                            <Popover open={emojiPickerOpen} onOpenChange={setEmojiPickerOpen}>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className="w-full justify-start text-left font-normal h-10"
                                                    >
                                                        {field.value ? (
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-lg">{field.value}</span>
                                                                <span>Emoji selecionado</span>
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center gap-2">
                                                                <Smile className="h-4 w-4" />
                                                                <span>Selecione um emoji</span>
                                                            </div>
                                                        )}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <EmojiPicker
                                                        onEmojiClick={(emojiData) => {
                                                            field.onChange(emojiData.emoji);
                                                            setEmojiPickerOpen(false);
                                                        }}
                                                        searchDisabled={true}
                                                        skinTonesDisabled={true}
                                                        width={300}
                                                        height={300}
                                                        previewConfig={{
                                                            defaultCaption: 'Escolha um ícone para sua categoria',
                                                            defaultEmoji: '🏷️'
                                                        }}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Color */}
                        <FormField
                            control={form.control}
                            name="color"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cor *</FormLabel>
                                    <FormControl>
                                        <div>
                                            <Popover open={colorPickerOpen} onOpenChange={setColorPickerOpen}>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className="w-full justify-start text-left font-normal h-10"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <div
                                                                className="w-4 h-4 rounded-full border"
                                                                style={{ backgroundColor: field.value }}
                                                            />
                                                            <span>{field.value || "Selecione uma cor"}</span>
                                                        </div>
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-3" align="start">
                                                    <HexColorPicker
                                                        color={field.value}
                                                        onChange={(color) => {
                                                            field.onChange(color);
                                                        }}
                                                    />
                                                    <div className="mt-2 flex items-center gap-2 text-sm">
                                                        <span>Cor:</span>
                                                        <span className="font-mono">{field.value}</span>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Preview */}
                        {watchedIcon && watchedColor && (
                            <div className="p-4 border rounded-lg bg-muted/50">
                                <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">{watchedIcon}</span>
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: watchedColor }}
                                        />
                                    </div>
                                    <span className="font-medium">
                                        {form.getValues("name") || "Nome da categoria"}
                                    </span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${watchedType === 'income'
                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                                        }`}>
                                        {watchedType === 'income' ? 'Receita' : 'Despesa'}
                                    </span>
                                </div>
                            </div>
                        )}

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
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                <Save className="w-4 h-4 mr-2" />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
