import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-semibold">Algo deu errado</h1>
        <p className="text-muted-foreground">
          Não foi possível autenticar. Verifique suas credenciais e tente
          novamente.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/login" className="underline">
            Voltar ao login
          </Link>
          <Link href="/" className="underline">
            Página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
