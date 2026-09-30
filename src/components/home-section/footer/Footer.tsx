import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NavLink } from "@/data-info/navigation";
import { Button } from "@/components/ui/Button";




export function Footer() {
     const footerColumns: NavLink[][] = [
  [
    { label: "Featured Courses", href: "/#courses" },
    { label: "Featured Categories", href: "/#courses" },
    { label: "Business", href: "/#courses" },
    { label: "IT", href: "/#courses" },
    { label: "Design", href: "/#courses" },
  ],
  [
    { label: "Development", href: "/#courses" },
    { label: "Marketing", href: "/#courses" },
    { label: "Photography", href: "/#courses" },
    { label: "Finance", href: "/#courses" },
    { label: "Sport", href: "/#courses" },
  ],
  [
    { label: "Become a Creator", href: "/#creators" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

// next to the copyright
const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];



  return (
    <footer className="border-t border-neutral-200 bg-white pt-16 pb-12 lg:pt-[71px]">
      <Container className="flex flex-col gap-16 lg:gap-[130px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-[92px]">
          
          <div className="flex max-w-[528px] flex-col gap-[45px] lg:w-[528px]">
            <div className="flex flex-col gap-4">
              <Link href="/#home" className="w-fit">
                <Image src="/logo/logo-dark.svg" alt="ByteSpace" width={171} height={37} />
              </Link>
              <p className="text-body-s">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
      <div>
        <form  className="flex max-w-[528px] items-center gap-3 sm:gap-6">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Enter your email"
            className="h-13 w-full min-w-0 flex-1 rounded-full border border-neutral-200 bg-white px-6 text-body-m text-neutral-950 placeholder:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:max-w-[376px]"
          />
       
          <Button type="submit" className="shrink-0">
            Subscribe
          </Button>
        </form>
      </div>

      <p className="max-w-[504px] text-body-xs">
        By subscribing, you agree to our{" "}
        <Link href="/privacy" className="underline-offset-2 hover:underline">
          Privacy Policy
        </Link>{" "}
        and consent to receive updates from our company.
      </p>
    </div>
          </div>

         
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:w-[581px] lg:pt-12">
            {footerColumns.map((column) => (
              <ul key={column[0].label} className="flex flex-col gap-4">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={`text-body-s transition-colors hover:text-primary-600`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>



        {/* copyright */}
        <div className="flex flex-col gap-4 border-t border-neutral-200 pt-[22px] text-body-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[d1d1d1]">© 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-primary-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
