"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signUp } from "@/app/(auth)/server";
import { Button } from "@/components/ui/Button";
import { PasswordField } from "@/components/ui/PasswordField";
import { TextField } from "@/components/ui/TextField";
import { signUpSchema, type SignUpValues } from "@/schema/signUpSchema";
import Link from "next/link";


export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { fullName: "", email: "", password: "" },
  });

 
  const [isPending, startTransition] = useTransition();

function onValid(values: SignUpValues) {
  startTransition(async () => {
    const result = await signUp(values);

    if (result.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Registered successfully. Please log in.");
  });
}



  return (
    <div
      className={
        "rounded-3xl bg-white px-6 py-10 sm:px-[63px] sm:py-[50px] xl:flex xl:min-h-[784px] xl:flex-col xl:justify-center"
      }
    >
      <div className="flex flex-col gap-10 xl:gap-[122px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-body-l text-primary-800">Create an Account</p>
              <h2 className="text-heading-s tracking-[-0.01em] text-neutral-950 sm:text-heading-m">
                Welcome to ByteSpace
              </h2>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onValid)}
            noValidate
            className="flex flex-col gap-6"
          >
            <TextField
              id="sign-up-name"
              label="Full Name"
              type="text"
              autoComplete="name"
              placeholder="Jamie Davis"
              error={errors.fullName?.message}
              {...register("fullName")}
            />
            <TextField
              id="sign-up-email"
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              error={errors.email?.message}
              {...register("email")}
            />
            <PasswordField
              id="sign-up-password"
              label="Password"
              autoComplete="new-password"
              placeholder="********"
              error={errors.password?.message}
              {...register("password")}
            />

            {/* Disabled while the action runs */}
            <Button type="submit" disabled={isPending} className="self-end">
              Continue
            </Button>
          </form>
        </div>

        <p className={`flex justify-center gap-1 text-body-m`}>
          Already have an account?
          <Link href="/sign-in" className="text-primary-800 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
