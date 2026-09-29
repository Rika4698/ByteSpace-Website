export type NavLink = {
  label: string;
  href: string;
};


export type SectionNavLink = NavLink & {
  sectionId: string;
};

// Centre links of the navbar.

export const mainLinks: SectionNavLink[] = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "Courses", href: "/#courses", sectionId: "courses" },
  { label: "Creators", href: "/#creators", sectionId: "creators" },
];


export const sectionIds = mainLinks.map((link) => link.sectionId);

