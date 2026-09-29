"use client";

import Link from "next/link";
import { mainLinks, sectionIds } from "@/data-info/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";


export function NavLinks() {
  const { activeId, selectSection } = useActiveSection(sectionIds, "home");

  return (
    <ul className="flex items-start gap-6">
      {mainLinks.map((link) => {
        const isActive = link.sectionId === activeId;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => selectSection(link.sectionId)}
              aria-current={isActive ? "true" : undefined}
              className={`block text-neutral-50 transition-colors hover:text-secondary-400 ${isActive ? "text-label-m font-medium": "text-body-m"}`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
