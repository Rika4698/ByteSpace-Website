import { z } from "zod";


export const signInSchema = z.object({
  email: z
  .string()
  .trim()
  .min(1, { error: "Enter your email" })
  .pipe(z.email({ error: "Enter a valid email address" })),

  password: z
  .string()
  .min(1, { message: "Enter your password" })
  .min(6, { message: "Password must be at least 6 characters" }),
});

export type SignInValues = z.infer<typeof signInSchema>;