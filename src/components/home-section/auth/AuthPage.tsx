import { Container } from "@/components/ui/Container";
import { PageDesign } from "./PageDesign";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function AuthPage({ title, description, children }: Props) {
  return (
    <main className="pb-16 xl:pb-[120px]">
      <Container className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between">
        <div className="relative mx-auto w-full max-w-[579px] xl:mx-0 xl:min-h-[770px] xl:w-[475px]">
          <div className="flex max-w-[475px] flex-col gap-4 text-neutral-50">
            <h1 className="text-heading-xs tracking-[-0.01em]">{title}</h1>
            <p className="text-body-l">{description}</p>
          </div>
          <PageDesign className="absolute top-[185px] -left-[23px] hidden xl:block" />
        </div>

        <div className="mx-auto w-full max-w-[579px] xl:mx-0">{children}</div>
      </Container>
    </main>
  );
}