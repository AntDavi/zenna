import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  } else {
  }

  const name = "Zenna";
  const description =
    "  A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.";

  return (
    <div className="grid h-full grid-cols-2 ">
      {/* Esquerda */}
      <div className="h-full flex flex-col p-8 max-w-130 mx-auto justify-center">
        <div className="mb-8">
          <p className="text-4xl font-bold">Zenna</p>
        </div>

        <h1 className="text-4xl font-bold mb-3">Bem Vindo</h1>
        <p className="mb-8 text-muted-foreground ">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>

      {/* Direita */}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Login Image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
