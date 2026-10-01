import type { Metadata } from "next";
import { SignUp } from "@/components/home-section/auth/SignUp";
import { AuthPage } from "@/components/home-section/auth/AuthPage";

export const metadata: Metadata = {
  title: "Sign up – ByteSpace",
};

export default function SignUpPage() {
  return (
    <AuthPage
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <SignUp/>
    </AuthPage>
  );
}