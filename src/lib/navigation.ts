export type NavItem = {
  label: string;
  href: string;
};

export const publicNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Guides", href: "/vendor" },
  { label: "Vendor Login", href: "/login" },
];

export const adminNavigation: NavItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Vendor Requests", href: "/admin/vendor-requests" },
  { label: "Packages", href: "/admin/packages" },
  { label: "Stays", href: "/admin/hotels" },
  { label: "Guides", href: "/admin/guides" },
];
