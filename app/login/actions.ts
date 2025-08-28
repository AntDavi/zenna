"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";

export type ActionState = {
  ok?: boolean;
  message?: string;
  fieldErrors?: Partial<Record<"email" | "password" | "name", string>>;
};

const SigninSchema = z.object({
  email: z.string().min(1, "Informe um email").email("Email inválido"),
  password: z
    .string()
    .min(1, "Informe uma senha")
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

const SignupSchema = z.object({
  name: z.string().min(1, "Informe seu nome").min(2, "Nome muito curto"),
  email: z.string().min(1, "Informe um email").email("Email inválido"),
  password: z
    .string()
    .min(1, "Informe uma senha")
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export async function login(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const supabase = await createClient();

  const parsed = SigninSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    const fe = parsed.error.flatten().fieldErrors;
    return {
      ok: false,
      fieldErrors: {
        email: fe.email?.[0],
        password: fe.password?.[0],
      },
    };
  }

  const { error } = await supabase.auth.signInWithPassword(parsed.data);
  if (error) {
    return { ok: false, message: error.message };
  }

  redirect("/dashboard");
  // Unreachable, but satisfies TypeScript return type
  // if redirect is mocked during tests.
  return { ok: true };
}

export async function signup(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const supabase = await createClient();

  const parsed = SignupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    const fe = parsed.error.flatten().fieldErrors;
    return {
      ok: false,
      fieldErrors: {
        name: fe.name?.[0],
        email: fe.email?.[0],
        password: fe.password?.[0],
      },
    };
  }

  const { name, email, password } = parsed.data;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (error) {
    return { ok: false, message: error.message };
  }

  // If email confirmation is enabled, data.session will be null
  if (!data.session) {
    redirect(
      `/auth/check-email?email=${encodeURIComponent(
        email
      )}&next=${encodeURIComponent("/dashboard")}`
    );
  }

  redirect("/dashboard");
  return { ok: true };
}
