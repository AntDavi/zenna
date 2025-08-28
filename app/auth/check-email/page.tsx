import Link from "next/link";

export default async function CheckEmailPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const email = (sp.email as string | undefined) ?? undefined;
  const next = (sp.next as string | undefined) ?? "/login";

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-semibold">Verifique seu email</h1>
        <p className="text-muted-foreground">
          Enviamos um link de confirmação
          {email ? (
            <>
              {" "}
              para <span className="font-medium">{email}</span>
            </>
          ) : null}
          . Clique no link para ativar sua conta e concluir o acesso.
        </p>
        <p className="text-sm text-muted-foreground">
          Após confirmar, você será redirecionado automaticamente. Caso
          necessário, volte para a página de login.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href={next} className="underline">
            Continuar
          </Link>
          <Link href="/login" className="underline">
            Ir para login
          </Link>
        </div>
      </div>
    </div>
  );
}
