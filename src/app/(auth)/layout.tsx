import Image from "next/image";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-primary-800 bg-grid">
      <header>
        <Container className="pt-[35px] pb-8 xl:h-30 xl:pb-0">
          <Link href="/" className="inline-block">
            <Image
              src="/logo/logo-mark.svg"
              alt="ByteSpace home"
              width={29}
              height={32}
              preload
            />
          </Link>
        </Container>
      </header>
      {children}
    </div>
  );
}