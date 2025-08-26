# Zenna - Documentação Completa

> **Sua plataforma de controle financeiro**  
> Tranquilidade com sua grana

---

## 📋 **Índice**
1. [Visão Geral](#visão-geral)
2. [Stack Tecnológica](#stack-tecnológica)
3. [Estrutura de Pastas](#estrutura-de-pastas)
4. [Funcionalidades](#funcionalidades)
5. [Componentes Principais](#componentes-principais)
6. [Telas da Aplicação](#telas-da-aplicação)
7. [Tipos e Interfaces](#tipos-e-interfaces)
8. [Estado do Projeto](#estado-do-projeto)
9. [O que Falta Implementar](#o-que-falta-implementar)
10. [Como Executar](#como-executar)

---

## 🎯 **Visão Geral**
 
O **Zenna** é uma aplicação web de controle financeiro pessoal, desenvolvida com foco em **simplicidade**, **segurança** e **experiência do usuário**. A aplicação permite que usuários gerenciem suas finanças através de um dashboard intuitivo, com funcionalidades completas de gestão de receitas, despesas e análises visuais.

### Principais Objetivos:
- 💰 **Controle Financeiro**: Gestão completa de receitas e despesas
- 📊 **Análises Visuais**: Gráficos e relatórios detalhados
- 🎨 **Personalização**: Categorias customizáveis com ícones e cores
- 🔒 **Privacidade**: Dados seguros e privados
- 📱 **Responsivo**: Interface adaptável a todos os dispositivos

---

## 🛠 **Stack Tecnológica**

### **Frontend**
- **Next.js 15.4.6** - Framework React com App Router
- **React 19.1.0** - Biblioteca de UI
- **TypeScript 5.9.2** - Tipagem estática
- **Tailwind CSS 4.1.12** - Framework CSS utilitário
- **shadcn/ui** - Sistema de componentes

### **Gerenciamento de Estado & Formulários**
- **React Hook Form 7.62.0** - Gerenciamento de formulários
- **Zod 4.0.17** - Validação de esquemas
- **@hookform/resolvers 5.2.1** - Integração RHF + Zod

### **UI & Interatividade**
- **Radix UI** - Primitivos de UI acessíveis
- **Lucide React 0.539.0** - Biblioteca de ícones
- **Recharts 2.15.4** - Biblioteca de gráficos
- **emoji-picker-react 4.13.2** - Seletor de emojis
- **react-colorful 5.6.1** - Seletor de cores
- **Sonner 2.0.7** - Sistema de notificações

### **Utilitários**
- **date-fns 4.1.0** - Manipulação de datas
- **class-variance-authority 0.7.1** - Variantes de CSS
- **tailwind-merge 3.3.1** - Merge de classes Tailwind
- **clsx 2.1.1** - Utilitário para classes condicionais

---

## 📁 **Estrutura de Pastas**

```
zenna/
├── app/                          # App Router do Next.js
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout raiz
│   ├── page.tsx                 # Página inicial (Landing)
│   ├── favicon.ico              # Ícone da aplicação
│   │
│   ├── login/                   # Página de autenticação
│   │   └── page.tsx            # Login/Cadastro
│   │
│   ├── (auth)/                  # Grupo de rotas autenticadas
│   │   ├── layout.tsx          # Layout autenticado
│   │   ├── dashboard/           # Dashboard principal
│   │   │   ├── page.tsx
│   │   │   └── _components/
│   │   │       ├── DateFilter.tsx
│   │   │       ├── FinanceDashboard.tsx
│   │   │       ├── FinancialCard.tsx
│   │   │       ├── FinancialChartBars.tsx
│   │   │       └── FinancialChartPie.tsx
│   │   ├── transactions/        # Gestão de transações
│   │   │   └── page.tsx
│   │   ├── patrimony/           # Controle de patrimônio
│   │   │   └── page.tsx
│   │   └── settings/            # Configurações
│   │       └── page.tsx
│   │
│   ├── _components/             # Componentes globais
│   │   ├── AppHeader.tsx        # Cabeçalho da aplicação
│   │   ├── AppSidebar.tsx       # Barra lateral
│   │   ├── CategoriesShowcase.tsx
│   │   ├── Columns.tsx          # Definições de colunas
│   │   ├── DataTableTransactions.tsx
│   │   ├── DialogAddCategory.tsx # Dialog para criar categorias
│   │   ├── DialogAddTransaction.tsx # Dialog para transações
│   │   ├── TransactionsHistoric.tsx
│   │   └── ui/                  # Componentes shadcn/ui
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── chart.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       ├── table.tsx
│   │       ├── textarea.tsx
│   │       └── tooltip.tsx
│   │
│   ├── _hooks/                  # Hooks customizados
│   │   └── use-mobile.ts       # Hook para detecção mobile
│   │
│   ├── _lib/                    # Utilitários
│   │   └── utils.ts            # Funções auxiliares
│   │
│   └── _types/                  # Definições de tipos
│       ├── categories.ts        # Tipos e dados de categorias
│       ├── links.ts            # Links de navegação
│       ├── README.md           # Documentação de tipos
│       └── transaction.ts       # Tipos de transações
│
├── public/                      # Arquivos estáticos
│   └── zenna.svg               # Logo da aplicação
│
├── components.json              # Configuração shadcn/ui
├── eslint.config.mjs           # Configuração ESLint
├── next-env.d.ts               # Tipos do Next.js
├── next.config.ts              # Configuração Next.js
├── package.json                # Dependências do projeto
├── pnpm-lock.yaml              # Lock file do pnpm
├── postcss.config.mjs          # Configuração PostCSS
├── tsconfig.json               # Configuração TypeScript
└── README.md                   # Documentação do projeto
```

---

## ⚡ **Funcionalidades**

### **🏠 Dashboard**
- **Cards Financeiros**: Receitas, despesas, saldo e total de transações
- **Gráficos Interativos**: Pizza (categorias) e barras (evolução temporal)
- **Filtros de Data**: Hoje, semana, mês ou período customizado
- **Histórico de Transações**: Lista completa com paginação

### **💳 Gestão de Transações**
- **Adicionar Transações**: Formulário completo com validação
- **Categorização**: Seleção de categorias pré-definidas
- **Valor e Descrição**: Campos obrigatórios e opcionais
- **Data Customizável**: Calendário para seleção de datas
- **Tipos**: Receitas e despesas diferenciadas

### **🎨 Personalização**
- **Categorias Customizáveis**: Criação de novas categorias
- **Seletor de Emojis**: Interface para escolha de ícones
- **Seletor de Cores**: Paleta completa de cores
- **Preview em Tempo Real**: Visualização antes de salvar

### **📊 Análises**
- **Gráfico de Pizza**: Distribuição de gastos por categoria
- **Gráfico de Barras**: Evolução temporal das finanças
- **Cards de Resumo**: Métricas importantes destacadas
- **Comparação de Períodos**: Porcentagens de crescimento/redução

---

## 🧩 **Componentes Principais**

### **FinancialCard**
```typescript
interface FinancialCardProps {
  type: "income" | "expense" | "balance" | "neutral";
  title: string;
  value: number;
  percentChange: number;
  isLoading?: boolean;
  icon?: React.ElementType;
  className?: string;
}
```
- Card responsivo com borda lateral colorida
- Suporte a loading state
- Formatação automática de moeda (exceto neutral)
- Porcentagem com cores condicionais

### **DialogAddTransaction**
```typescript
interface DialogAddTransactionProps {
  type: 'income' | 'expense';
  trigger?: React.ReactNode;
}
```
- Formulário completo com validação
- Integração com React Hook Form + Zod
- Seleção de categorias com preview
- Calendário para datas
- Estados visuais diferenciados

### **DialogAddCategory**
```typescript
interface DialogAddCategoryProps {
  trigger?: React.ReactNode;
}
```
- Criação de categorias personalizadas
- Seletor de emoji interativo
- Seletor de cores com preview
- Validação de formulário
- Preview da categoria em tempo real

---

## 🖥 **Telas da Aplicação**

### **1. Landing Page (`/`)**
- **Status**: 🟡 Básica (apenas link para login)
- **Descrição**: Página inicial com apresentação do produto
- **Funcionalidades**: Link direto para login

### **2. Login/Cadastro (`/login`)**
- **Status**: ✅ Completa (Frontend)
- **Descrição**: Autenticação com tabs para login e cadastro
- **Funcionalidades**: 
  - Formulários de login e registro
  - Validação de campos
  - Interface responsiva
  - **Nota**: Apenas frontend, sem backend

### **3. Dashboard (`/dashboard`)**
- **Status**: ✅ Completa
- **Descrição**: Painel principal com visão geral financeira
- **Funcionalidades**:
  - Cards de resumo financeiro
  - Gráficos interativos
  - Filtros de data
  - Histórico de transações
- **Nota**: Apenas frontend, sem backend

### **4. Transações (`/transactions`)**
- **Status**: 🟡 Estrutura básica
- **Descrição**: Página dedicada à gestão de transações
- **Funcionalidades**: Estrutura criada, conteúdo a definir
- **Nota**: Apenas frontend, sem backend

### **5. Patrimônio (`/patrimony`)**
- **Status**: 🟡 Estrutura básica
- **Descrição**: Controle e evolução do patrimônio
- **Funcionalidades**: Estrutura criada, conteúdo a definir

### **6. Configurações (`/settings`)**
- **Status**: 🟡 Estrutura básica
- **Descrição**: Configurações da conta e preferências
- **Funcionalidades**: Estrutura criada, conteúdo a definir

---

## 📝 **Tipos e Interfaces**

### **Transaction**
```typescript
export interface Transaction {
  id: string;
  amount: number;
  description: string;
  date: Date;
  category_id: string;
  type: 'income' | 'expense';
}
```

### **Category**
```typescript
export interface Category {
  id: string;
  name: string;
  color: string;
  icon?: string;
  description?: string;
}
```

### **Links de Navegação**
```typescript
export const menuItems = [
  { title: "Dashboard", href: "/dashboard", icon: PieChart },
  { title: "Transações", href: "/transactions", icon: TrendingUp },
  { title: "Patrimonio", href: "/patrimony", icon: Shield },
  { title: "Configurações", href: "/settings", icon: Settings },
]
```

---

## 📊 **Estado do Projeto**

### **✅ Implementado**
- [x] Estrutura base do Next.js com App Router
- [x] Sistema de design com shadcn/ui
- [x] Componentes de UI fundamentais
- [x] Dashboard completo com gráficos
- [x] Cards financeiros responsivos
- [x] Dialog para adicionar transações
- [x] Dialog para criar categorias personalizadas
- [x] Sistema de categorias com ícones e cores
- [x] Formulários com validação (React Hook Form + Zod)
- [x] Header com menu dropdown
- [x] Página de login/cadastro (frontend)
- [x] Estrutura de rotas autenticadas
- [x] Dados mock para demonstração

### **🟡 Em Desenvolvimento**
- [ ] Landing page completa e atrativa
- [ ] Conteúdo das páginas: Transações, Patrimônio, Conexão com Bot
- [ ] Sistema de persistência de dados (localStorage)
- [ ] Funcionalidade de editar/excluir transações
- [ ] Filtros avançados de transações
- [ ] Exportação de dados (CSV, PDF)

### **🔴 Não Implementado**
- [ ] Backend/API
- [ ] Autenticação real
- [ ] Banco de dados
- [ ] Sincronização em nuvem
- [ ] Aplicativo mobile
- [ ] Integração bancária
- [ ] Notificações push
- [ ] Multi-idiomas
- [ ] Tema escuro/claro
- [ ] Backup automático

---

## 🚀 **O que Falta Implementar**

### **Prioridade Alta**
1. **Landing Page Completa**
   - Hero section profissional
   - Seção de benefícios
   - Depoimentos/testimonials
   - Call-to-action

2. **Persistência de Dados**
   - LocalStorage para categorias
   - LocalStorage para transações
   - Estado global da aplicação

3. **CRUD Completo de Transações**
   - Editar transações existentes
   - Excluir transações
   - Busca e filtros avançados

### **Prioridade Média**
1. **Páginas Secundárias**
   - Conteúdo da página Transações
   - Conteúdo da página Patrimônio
   - Conteúdo da página Configurações

2. **Funcionalidades Avançadas**
   - Exportação de relatórios
   - Gráficos mais detalhados
   - Metas financeiras
   - Lembretes e alertas

3. **UX/UI Melhorias**
   - Loading states
   - Error states
   - Skeleton components
   - Animações suaves

### **Prioridade Baixa**
1. **Integração Backend**
   - API REST ou GraphQL
   - Banco de dados
   - Autenticação JWT

2. **Funcionalidades Premium**
   - Sincronização multi-dispositivo
   - Análises avançadas
   - Integrações bancárias

---

## 🏃‍♂️ **Como Executar**

### **Pré-requisitos**
- Node.js 18+ 
- pnpm (recomendado) ou npm

### **Instalação**
```bash
# Clonar o repositório
git clone https://github.com/AntDavi/zenna.git
cd zenna

# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar produção
pnpm start
```

### **Scripts Disponíveis**
- `pnpm dev` - Desenvolvimento com Turbopack
- `pnpm build` - Build para produção
- `pnpm start` - Executar versão de produção
- `pnpm lint` - Verificar código com ESLint

---

## 🤝 **Contribuição**

O projeto está em desenvolvimento ativo. Principais áreas que necessitam contribuição:

1. **Frontend**: Implementação de páginas e componentes
2. **UX/UI**: Melhorias na experiência do usuário
3. **Funcionalidades**: Novas features e análises
4. **Documentação**: Expansão da documentação
5. **Testes**: Implementação de testes automatizados

---

## 📄 **Licença**

Projeto privado - Todos os direitos reservados.

---

**Última atualização**: 26 de agosto de 2025  
**Versão**: 0.1.0  
**Status**: Em desenvolvimento ativo 🚀
