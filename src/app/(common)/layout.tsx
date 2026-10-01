import { Footer } from "@/components/home-section/footer/Footer";
import { Navbar } from "@/components/home-section/navbar/Navbar";


// for all page
export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}