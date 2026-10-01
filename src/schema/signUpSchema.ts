import { z } from "zod";


export const signUpSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, { message: "Enter your full name" })
    .min(2, { message: "Name must be at least 2 characters" })
    .max(20, { message: "Name must be at most 20 characters" }),

  email: z
  .string()
  .trim()
  .min(1, { error: "Enter your email" })
  .pipe(z.email({ error: "Enter a valid email address" })),

  password: z
  .string()
  .min(1, { message: "Enter your password" })
  .min(8, { message: "Password must be at least 6 characters" }),
});

export type SignUpValues = z.infer<typeof signUpSchema>;