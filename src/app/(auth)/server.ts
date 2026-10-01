"use server";

import { redirect } from "next/navigation";
import { signUpSchema, type SignUpValues } from "@/schema/signUpSchema";


export type AuthRedirect = { error: string };

export async function signUp(values: SignUpValues): Promise<AuthRedirect> {
  const result = signUpSchema.safeParse(values);
  if (!result.success) {
    return { error: "Please check your details and try again." };
  }

  
  redirect("/sign-in");
}
