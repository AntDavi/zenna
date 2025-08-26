import Link from "next/link";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { landingItems } from "./_types/links";
import { Badge } from "./_components/ui/badge";
import { ArrowRight, MessageCircle, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      {/* Header */}
      <header className="p-4 border-b shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Image src="zenna.svg" alt="Zenna Logo" width={100} height={100} />

          <nav>
            <ul className="flex space-x-4">
              {landingItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Logo/Brand */}
              <div className="space-y-2">
                <h1 className="text-6xl lg:text-7xl font-bold text-primary mb-4">
                  Zenna
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                  Tranquilidade com sua grana
                </p>
              </div>

              {/* Main description */}
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
                  Controle suas finanças pessoais direto no seu{" "}
                  <strong>Telegram</strong> ou <strong>WhatsApp</strong>.
                  Adicione transações, receba insights da nossa IA e tenha total
                  controle financeiro na palma da mão.
                </p>

                {/* Key features highlight */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <Badge className="flex items-center gap-2 bg-accent/50 px-3 py-2 rounded-full">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Via WhatsApp
                    </span>
                  </Badge>
                  <Badge className="flex items-center gap-2 bg-accent/50 px-3 py-2 rounded-full">
                    <Smartphone className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      IA Integrada
                    </span>
                  </Badge>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="group">
                  Comece agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-up">
              <div className="relative">
                <Image
                  src="/hero-image.jpg"
                  alt="Interface do Zenna mostrando controle financeiro"
                  className="w-full h-auto rounded-2xl shadow-lg hover:shadow-glow transition-all duration-500"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    R$ 2.847
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Saldo atual
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-card p-3 rounded-xl shadow-lg"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Transação adicionada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
