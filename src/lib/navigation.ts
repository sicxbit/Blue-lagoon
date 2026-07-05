export type NavItem = {
  label: string;
  href: string;
};

export const publicNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Guides", href: "/vendor" },
  { label: "Login", href: "/login" },
];

export const adminNavigation: NavItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Packages", href: "/admin/packages" },
  { label: "Hotels", href: "/admin/hotels" },
  { label: "Guides", href: "/admin/guides" },
];
