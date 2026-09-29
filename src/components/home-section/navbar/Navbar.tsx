import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

import { NavLinks } from "./NavLinks";



export function Navbar() {
  return (
    
 
      <Container className="flex h-20 items-center justify-between transition-[height] duration-300 group-data-[scrolled=true]:h-16 motion-reduce:transition-none md:h-30 md:group-data-[scrolled=true]:h-20 bg-blue-900 container-content">
        <Link href="/#home">
          <Image
            src="./logo/logo-white.svg"
            alt="ByteSpace"
            width={171}
            height={37}
            preload
          />
        </Link>

        {/* Server-rendered wrapper; only the link list inside is a Client Component */}
        <nav aria-label="Main" className="hidden md:block">
          <NavLinks />
        </nav>

        
      </Container>
   
  );
}
