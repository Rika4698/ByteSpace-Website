import type { Metadata } from "next";
import { AuthPage } from "@/components/home-section/auth/AuthPage";
import { SignIn } from "@/components/home-section/auth/SignIn";

export const metadata: Metadata = {
  title: "Sign in – ByteSpace",
};

export default function SignInPage() {
  return (
    <AuthPage
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <SignIn />
    </AuthPage>
  );
}
