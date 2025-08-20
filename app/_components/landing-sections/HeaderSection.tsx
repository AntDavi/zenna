'use client'

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/enhaced-button"
import Image from "next/image"

export const HeaderSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Image
                        src="/zenna.svg"
                        alt="Zenna Logo"
                        width={100}
                        height={100}
                    />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#beneficios" className="text-foreground/80 hover:text-primary transition-colors">
                            Benefícios
                        </a>
                        <a href="#depoimentos" className="text-foreground/80 hover:text-primary transition-colors">
                            Depoimentos
                        </a>
                        <a href="#como-funciona" className="text-foreground/80 hover:text-primary transition-colors">
                            Como funciona
                        </a>
                        <a href="#precos" className="text-foreground/80 hover:text-primary transition-colors">
                            Preços
                        </a>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost">
                            Entrar
                        </Button>
                        <Button variant="cta">
                            Começar grátis
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-border/50 py-4">
                        <nav className="flex flex-col space-y-4">
                            <a
                                href="#beneficios"
                                className="text-foreground/80 hover:text-primary transition-colors py-2"
                                onClick={toggleMenu}
                            >
                                Benefícios
                            </a>
                            <a
                                href="#depoimentos"
                                className="text-foreground/80 hover:text-primary transition-colors py-2"
                                onClick={toggleMenu}
                            >
                                Depoimentos
                            </a>
                            <a
                                href="#como-funciona"
                                className="text-foreground/80 hover:text-primary transition-colors py-2"
                                onClick={toggleMenu}
                            >
                                Como funciona
                            </a>
                            <a
                                href="#precos"
                                className="text-foreground/80 hover:text-primary transition-colors py-2"
                                onClick={toggleMenu}
                            >
                                Preços
                            </a>
                            <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                                <Button variant="ghost" className="justify-start">
                                    Entrar
                                </Button>
                                <Button variant="cta" className="justify-start">
                                    Começar grátis
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}