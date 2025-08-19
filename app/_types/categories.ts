export interface Category {
    id: string;
    name: string;
    color: string;
    icon?: string;
    description?: string;
}

export interface CategoriesByType {
    income: Category[];
    expense: Category[];
}

export const mockCategories: CategoriesByType = {
    income: [
        {
            id: '1',
            name: 'Salário',
            color: '#22c55e',
            icon: '💼',
            description: 'Salário mensal ou quinzenal'
        },
        {
            id: '2',
            name: 'Freelance',
            color: '#3b82f6',
            icon: '💻',
            description: 'Trabalhos freelancer e projetos extras'
        },
        {
            id: '3',
            name: 'Investimentos',
            color: '#8b5cf6',
            icon: '📈',
            description: 'Rendimentos de investimentos e dividendos'
        },
        {
            id: '4',
            name: 'Vendas',
            color: '#f59e0b',
            icon: '🏪',
            description: 'Vendas de produtos ou serviços'
        },
        {
            id: '5',
            name: 'Aluguel',
            color: '#06b6d4',
            icon: '🏠',
            description: 'Renda de aluguel de imóveis'
        },
        {
            id: '6',
            name: 'Bonificação',
            color: '#84cc16',
            icon: '🎁',
            description: 'Bônus, 13º salário e premiações'
        },
        {
            id: '7',
            name: 'Consultoria',
            color: '#ec4899',
            icon: '🎯',
            description: 'Serviços de consultoria e mentoria'
        },
        {
            id: '8',
            name: 'Royalties',
            color: '#14b8a6',
            icon: '👑',
            description: 'Direitos autorais e royalties'
        },
        {
            id: '9',
            name: 'Pensão',
            color: '#f97316',
            icon: '🤝',
            description: 'Pensão alimentícia ou aposentadoria'
        },
        {
            id: '10',
            name: 'Outros',
            color: '#6b7280',
            icon: '💰',
            description: 'Outras fontes de renda'
        },
    ],
    expense: [
        {
            id: '1',
            name: 'Alimentação',
            color: '#ef4444',
            icon: '🍽️',
            description: 'Supermercado, restaurantes e delivery'
        },
        {
            id: '2',
            name: 'Transporte',
            color: '#f59e0b',
            icon: '🚗',
            description: 'Combustível, transporte público e manutenção'
        },
        {
            id: '3',
            name: 'Moradia',
            color: '#06b6d4',
            icon: '🏡',
            description: 'Aluguel, financiamento e condomínio'
        },
        {
            id: '4',
            name: 'Saúde',
            color: '#ec4899',
            icon: '🏥',
            description: 'Plano de saúde, medicamentos e consultas'
        },
        {
            id: '5',
            name: 'Entretenimento',
            color: '#8b5cf6',
            icon: '🎬',
            description: 'Cinema, streaming, jogos e lazer'
        },
        {
            id: '6',
            name: 'Educação',
            color: '#3b82f6',
            icon: '📚',
            description: 'Cursos, livros e material educacional'
        },
        {
            id: '7',
            name: 'Vestuário',
            color: '#22c55e',
            icon: '👕',
            description: 'Roupas, calçados e acessórios'
        },
        {
            id: '8',
            name: 'Utilidades',
            color: '#84cc16',
            icon: '⚡',
            description: 'Luz, água, gás, internet e telefone'
        },
        {
            id: '9',
            name: 'Beleza',
            color: '#f97316',
            icon: '💄',
            description: 'Salão, cosméticos e produtos de beleza'
        },
        {
            id: '10',
            name: 'Pet',
            color: '#14b8a6',
            icon: '🐕',
            description: 'Ração, veterinário e produtos para pets'
        },
        {
            id: '11',
            name: 'Impostos',
            color: '#71717a',
            icon: '📊',
            description: 'IPTU, IPVA e outros impostos'
        },
        {
            id: '12',
            name: 'Seguros',
            color: '#475569',
            icon: '🛡️',
            description: 'Seguro auto, residencial e de vida'
        },
        {
            id: '13',
            name: 'Tecnologia',
            color: '#0ea5e9',
            icon: '💻',
            description: 'Eletrônicos, software e assinaturas'
        },
        {
            id: '14',
            name: 'Presentes',
            color: '#d946ef',
            icon: '🎁',
            description: 'Presentes para família e amigos'
        },
        {
            id: '15',
            name: 'Viagem',
            color: '#059669',
            icon: '✈️',
            description: 'Passagens, hospedagem e turismo'
        },
        {
            id: '16',
            name: 'Outros',
            color: '#6b7280',
            icon: '💳',
            description: 'Outras despesas não categorizadas'
        },
    ],
};

// Função para buscar categorias por tipo
export const getCategoriesByType = (type: 'income' | 'expense'): Category[] => {
    return mockCategories[type];
};

// Função para buscar uma categoria específica por ID
export const getCategoryById = (id: string): Category | undefined => {
    const allCategories = [...mockCategories.income, ...mockCategories.expense];
    return allCategories.find(category => category.id === id);
};

// Função para buscar todas as categorias
export const getAllCategories = (): Category[] => {
    return [...mockCategories.income, ...mockCategories.expense];
};

// Cores disponíveis para novas categorias
export const availableColors = [
    '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
    '#059669', '#0891b2', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6',
    '#a855f7', '#c026d3', '#d946ef', '#ec4899', '#f43f5e', '#71717a',
    '#475569', '#374151', '#1f2937', '#111827', '#0f172a', '#14b8a6',
    '#06b6d4', '#0284c7', '#2563eb', '#4f46e5', '#7c3aed', '#9333ea',
];
