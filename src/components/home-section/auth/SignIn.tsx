"use client";

import Image from "next/image";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "@/app/(auth)/server";
import { Button } from "@/components/ui/Button";
import { PasswordField } from "@/components/ui/PasswordField";
import { TextField } from "@/components/ui/TextField";
import { signInSchema, type SignInValues } from "@/schema/signInSchema";
import Link from "next/link";





const socialLogins = [
  { name: "Facebook", icon: "/social/facebook.svg" },
  { name: "Google", icon: "/social/google.svg" },
];

const socialDemoMessage = "! Social sign-in isn't available yet.";


export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

 
  const [isPending, startTransition] = useTransition();


function onValid(values: SignInValues) {
  startTransition(async () => {
    const result = await signIn(values);

    if (result.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Signed in successfully");
  });
}

  return (
    <div
      className={`rounded-3xl bg-white px-6 py-10 sm:px-[63px] sm:py-[50px] xl:flex xl:min-h-[784px] xl:flex-col xl:justify-center`}
    >
      <div className="flex flex-col justify-between gap-10 xl:min-h-[683px]">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-body-l text-primary-800">Sign In</p>
            <h2 className="text-heading-s tracking-[-0.01em] text-neutral-950 sm:text-heading-m">
              Welcome Back
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onValid)}
            noValidate
            className="flex flex-col gap-6"
          >
            <TextField
              id="sign-in-email"
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              error={errors.email?.message}
              {...register("email")}
            />
            <PasswordField
              id="sign-in-password"
              label="Password"
              autoComplete="current-password"
              placeholder="********"
              error={errors.password?.message}
              {...register("password")}
            />

     
            <Button type="submit" disabled={isPending} className="self-end">
              Sign In
            </Button>
          </form>
        </div>

        <div className="flex flex-col gap-10">

          <div className="flex items-center gap-[11px]">
            <span
              aria-hidden="true"
              className={`h-px flex-1 bg-[#d1d1d1]`}
            />
            <span className={`text-body-l text-[#888888]`}>or</span>
            <span
              aria-hidden="true"
              className={`h-px flex-1 bg-[#d1d1d1]`}
            />
          </div>

    
          <div className="flex justify-center gap-4">
            {socialLogins.map((social) => (
              <button
                key={social.name}
                type="button"
                aria-label={`Sign in with ${social.name}`}
                onClick={() => toast(socialDemoMessage)}
                className="flex size-18 items-center justify-center rounded-3xl border border-[#d1d1d1] bg-white transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                <Image src={social.icon} alt="" width={40} height={40} />
              </button>
            ))}
          </div>
        </div>
        <p className={`flex justify-center gap-1 text-body-m`}>
          New User?
          <Link href="/sign-up" className="text-primary-800 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
