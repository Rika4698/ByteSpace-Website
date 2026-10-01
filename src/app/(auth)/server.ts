"use server";

import { redirect } from "next/navigation";
import { signUpSchema, type SignUpValues } from "@/schema/signUpSchema";
import { signInSchema, type SignInValues } from "@/schema/signInSchema";


export type Auth = { error: string };

export async function signUp(values: SignUpValues): Promise<Auth> {
  const result = signUpSchema.safeParse(values);
  if (!result.success) {
    return { error: "Please check your details and try again." };
  }

  
  redirect("/sign-in");
}


export async function signIn(values: SignInValues): Promise<Auth> {
 
  const result = signInSchema.safeParse(values);
  if (!result.success) {
    return { error: "Please check your email and password." };
  }

 
  redirect("/");
}