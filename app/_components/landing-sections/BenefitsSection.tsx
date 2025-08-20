import { Card } from "../ui/card"
import {
    Smartphone,
    MessageCircle,
    BarChart3,
    Shield,
    Zap,
    Bot
} from "lucide-react"

export const benefits = [
    {
        icon: MessageCircle,
        title: "Controle via WhatsApp e Telegram",
        description: "Adicione transações e receba insights diretamente no seu app de mensagens favorito",
        highlight: true
    },
    {
        icon: Bot,
        title: "IA Financeira Integrada",
        description: "Receba dicas personalizadas e análises inteligentes sobre seus gastos",
        highlight: true
    },
    {
        icon: BarChart3,
        title: "Dashboard Intuitivo",
        description: "Visualize suas receitas, despesas e saldo de forma clara e organizada"
    },
    {
        icon: Zap,
        title: "Relatórios Instantâneos",
        description: "Gráficos automáticos para análise rápida de suas categorias de gastos"
    },
    {
        icon: Smartphone,
        title: "100% Mobile",
        description: "Acesse suas finanças a qualquer hora, em qualquer lugar, pelo celular"
    },
    {
        icon: Shield,
        title: "Segurança Total",
        description: "Seus dados financeiros protegidos com criptografia de ponta a ponta"
    }
]

export const BenefitsSection = () => {
    return (
        <section className="py-20 bg-background relative">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Por que escolher o <span className="text-primary">Zenna</span>?
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Uma nova forma de gerenciar suas finanças: simples, inteligente e sempre ao seu alcance
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <Card
                                key={index}
                                className={`p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 card-gradient border-border/50 ${benefit.highlight ? 'ring-2 ring-primary/20' : ''
                                    }`}
                            >
                                <div className="space-y-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${benefit.highlight ? 'hero-gradient shadow-glow' : 'bg-accent'
                                        }`}>
                                        <Icon className={`w-6 h-6 ${benefit.highlight ? 'text-primary-foreground' : 'text-primary'
                                            }`} />
                                    </div>

                                    <h3 className="text-xl font-semibold text-foreground">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>

                                {benefit.highlight && (
                                    <div className="mt-4 pt-4 border-t border-primary/20">
                                        <span className="text-sm font-medium text-primary">
                                            ✨ Diferencial do Zenna
                                        </span>
                                    </div>
                                )}
                            </Card>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-primary">Mais de 50 funcionalidades disponíveis</span>
                    </div>
                </div>
            </div>
        </section>
    )
}