import Image from "next/image"
import { Button } from "../ui/enhaced-button"
import { ArrowRight, Smartphone, MessageCircle } from "lucide-react"

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center subtle-gradient overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8 animate-fade-in">
                        {/* Logo/Brand */}
                        <div className="space-y-2">
                            <Image
                                src="/zenna.svg"
                                alt="Zenna Logo"
                                width={200}
                                height={200}
                            />
                            <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                                Tranquilidade com sua grana
                            </p>
                        </div>

                        {/* Main description */}
                        <div className="space-y-4">
                            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
                                Controle suas finanças pessoais direto no seu <strong>Telegram</strong> ou <strong>WhatsApp</strong>.
                                Adicione transações, receba insights da nossa IA e tenha total controle financeiro na palma da mão.
                            </p>

                            {/* Key features highlight */}
                            <div className="flex flex-wrap gap-4 mt-6">
                                <div className="flex items-center gap-2 bg-accent/50 px-3 py-2 rounded-full">
                                    <MessageCircle className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium">Via WhatsApp</span>
                                </div>
                                <div className="flex items-center gap-2 bg-accent/50 px-3 py-2 rounded-full">
                                    <Smartphone className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium">IA Integrada</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Button variant="cta" size="xl" className="group">
                                Comece agora
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        {/* Social proof */}
                        <div className="pt-8 border-t border-border/50">
                            <p className="text-sm text-muted-foreground mb-3">Mais de 10.000 pessoas já usam o Zenna</p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-2 text-sm text-muted-foreground">4.9/5 estrelas</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative animate-slide-up">
                        <div className="relative">
                            <Image
                                src="/hero-image.jpg"
                                className="w-full h-auto rounded-2xl shadow-card hover:shadow-glow transition-all duration-500"
                                width={500}
                                height={300}
                                alt="Interface do Zenna mostrando controle financeiro"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-card animate-float">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">R$ 2.847</div>
                                <div className="text-sm text-muted-foreground">Saldo atual</div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-card p-3 rounded-xl shadow-card animate-float" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm font-medium">Transação adicionada</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}