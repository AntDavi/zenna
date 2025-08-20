import { ArrowLeft, Lock, Mail, User } from "lucide-react";
import { Label } from "../_components/ui/label";
import { Input } from "../_components/ui/input";
import { Button } from "../_components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../_components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 flex items-center justify-center p-4">

            <Link href="/" className="absolute top-5 left-5 flex items-center gap-2">
                <ArrowLeft size={20} />
                Voltar
            </Link>

            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Image
                            src="/zenna.svg"
                            alt="Zenna Logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    <p className="text-muted-foreground">
                        Tranquilidade com sua grana.
                    </p>
                </div>

                <Card className="shadow-lg border-0 bg-card">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-center">Acesse sua conta</CardTitle>
                        <CardDescription className="text-center">
                            Entre com email e senha ou crie uma nova conta
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="signin" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="signin">Entrar</TabsTrigger>
                                <TabsTrigger value="signup">Cadastrar</TabsTrigger>
                            </TabsList>

                            <TabsContent value="signin">
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="seu@email.com"
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Senha</Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="password"
                                                type="password"
                                                placeholder="••••••••"
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        size="lg"
                                    >
                                        Entrar
                                    </Button>
                                </form>
                            </TabsContent>

                            <TabsContent value="signup">
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Nome</Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="Seu nome"
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-email">Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="signup-email"
                                                type="email"
                                                placeholder="seu@email.com"
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-password">Senha</Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="signup-password"
                                                type="password"
                                                placeholder="••••••••"
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        size="lg"
                                    >
                                        Criar conta
                                    </Button>
                                </form>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}