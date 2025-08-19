# 📊 Sistema de Categorias - Zenna

Este documento descreve o sistema de categorias da aplicação Zenna, incluindo sua estrutura, uso e como expandir.

## 📁 Estrutura de Arquivos

```
app/_data/
└── categories.ts    # Definições das categorias e funções utilitárias
```

## 🏗️ Estrutura de Dados

### Interface Category
```typescript
interface Category {
  id: string;           // Identificador único
  name: string;         // Nome da categoria
  color: string;        // Cor em formato hexadecimal
  icon?: string;        // Emoji ou ícone (opcional)
  description?: string; // Descrição detalhada (opcional)
}
```

## 📚 Categorias Disponíveis

### 💰 Receitas (10 categorias)
- **Salário** (💼) - Verde escuro
- **Freelance** (💻) - Azul
- **Investimentos** (📈) - Roxo
- **Vendas** (🏪) - Amarelo/Laranja
- **Aluguel** (🏠) - Ciano
- **Bonificação** (🎁) - Verde limão
- **Consultoria** (🎯) - Rosa
- **Royalties** (👑) - Verde-azulado
- **Pensão** (🤝) - Laranja
- **Outros** (💰) - Cinza

### 💸 Despesas (16 categorias)
- **Alimentação** (🍽️) - Vermelho
- **Transporte** (🚗) - Amarelo
- **Moradia** (🏡) - Ciano
- **Saúde** (🏥) - Rosa
- **Entretenimento** (🎬) - Roxo
- **Educação** (📚) - Azul
- **Vestuário** (👕) - Verde
- **Utilidades** (⚡) - Verde limão
- **Beleza** (💄) - Laranja
- **Pet** (🐕) - Verde-azulado
- **Impostos** (📊) - Cinza escuro
- **Seguros** (🛡️) - Azul escuro
- **Tecnologia** (💻) - Azul claro
- **Presentes** (🎁) - Magenta
- **Viagem** (✈️) - Verde esmeralda
- **Outros** (💳) - Cinza

## 🔧 Funções Utilitárias

### `getCategoriesByType(type: 'income' | 'expense'): Category[]`
Retorna todas as categorias de um tipo específico.

```typescript
const incomeCategories = getCategoriesByType('income');
const expenseCategories = getCategoriesByType('expense');
```

### `getCategoryById(id: string): Category | undefined`
Busca uma categoria específica pelo seu ID.

```typescript
const category = getCategoryById('income-1'); // Retorna categoria Salário
```

### `getAllCategories(): Category[]`
Retorna todas as categorias (receitas e despesas).

```typescript
const allCategories = getAllCategories();
console.log(`Total: ${allCategories.length} categorias`); // Total: 26 categorias
```

## 🎨 Sistema de Cores

O sistema utiliza uma paleta de 30 cores distintas para garantir variedade visual:

- Cores primárias: Vermelho, Verde, Azul, Amarelo
- Cores secundárias: Roxo, Rosa, Ciano, Laranja
- Variações: Tons claros e escuros de cada cor
- Cores neutras: Diferentes tons de cinza

## 📱 Como Usar

### Em Componentes
```typescript
import { getCategoriesByType, getCategoryById } from '../_data/categories';

// Em um componente
const categories = getCategoriesByType('expense');
const selectedCategory = getCategoryById(form.category_id);
```

### No DialogAddTransaction
O diálogo já está configurado para usar o novo sistema:
- Carrega categorias dinamicamente baseado no tipo
- Exibe ícones, cores e descrições
- Interface visual melhorada

## 🔄 Como Expandir

### Adicionar Nova Categoria
1. Abra o arquivo `app/_data/categories.ts`
2. Adicione um novo objeto no array apropriado (income/expense)
3. Siga a estrutura existente:

```typescript
{
  id: 'expense-17',
  name: 'Nova Categoria',
  color: '#cor-hexadecimal',
  icon: '🆕',
  description: 'Descrição da nova categoria'
}
```

### Modificar Cores
Use o array `availableColors` como referência para cores testadas e harmoniosas.

### Adicionar Novos Campos
Modifique a interface `Category` e adicione os campos necessários em todas as categorias existentes.

## 🧪 Componente de Teste

Use o componente `CategoriesShowcase` para visualizar todas as categorias:

```typescript
import { CategoriesShowcase } from './components/CategoriesShowcase';

// Em uma página
<CategoriesShowcase />
```

## 📈 Estatísticas Atuais

- **Total de Categorias**: 26
- **Receitas**: 10 categorias
- **Despesas**: 16 categorias
- **Cores Únicas**: 30 cores disponíveis
- **Com Ícones**: 100% das categorias
- **Com Descrições**: 100% das categorias

---

*Última atualização: 19 de agosto de 2025*
