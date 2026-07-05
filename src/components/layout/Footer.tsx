import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Waves } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { publicNavigation } from "@/lib/navigation";

const socialLinks = [
  { href: "#", label: "Facebook", icon: SiFacebook },
  { href: "#", label: "X", icon: BsTwitterX },
  { href: "#", label: "Instagram", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="pb-8 pt-16 md:pb-12 md:pt-24">
      <div className="site-container">
        <div className="glass-panel-dark overflow-hidden rounded-[36px] shadow-[0_24px_60px_rgba(6,59,76,0.24)]">
          <div className="grid gap-10 px-6 py-10 md:grid-cols-[1.3fr_0.8fr_0.9fr] md:px-10 md:py-12">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
                <Waves className="h-4 w-4 text-[var(--sun)]" />
                Ocean-crafted journeys
              </div>
              <div className="space-y-3">
                <h2 className="brand-logo brand-logo-inverse font-display text-4xl leading-none md:text-5xl">Blue Lagoon</h2>
                <p className="max-w-xl text-sm leading-7 text-white/72 md:text-base">
                  Premium coastal escapes, island stays, and local guide experiences designed to feel calm, polished, and unforgettable.
                </p>
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="soft-hover transition-smooth inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/88 hover:border-white/24 hover:bg-white/14"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--sun)]">Navigate</h3>
              <div className="grid gap-3">
                {publicNavigation.map((item) => (
                  <Link key={item.href} href={item.href} className="wave-link wave-link-calm transition-smooth text-sm text-white/76 hover:text-[var(--mist)]">
                    {item.label}
                  </Link>
                ))}
                <Link href="/guide" className="wave-link wave-link-calm transition-smooth text-sm text-white/76 hover:text-[var(--mist)]">
                  Guide
                </Link>
                <Link href="/admin" className="wave-link wave-link-calm transition-smooth text-sm text-white/76 hover:text-[var(--mist)]">
                  Admin
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--sun)]">Contact</h3>
              <div className="space-y-3 text-sm text-white/76">
                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-[var(--aqua)]" />
                  hello@bluelagoon.travel
                </p>
                <p className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-[var(--aqua)]" />
                  +91 98765 43210
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-[var(--aqua)]" />
                  Panjim, Goa and partner hosts across the Indian Ocean and Mediterranean coast.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 px-6 py-4 text-sm text-white/56 md:px-10">
            Copyright {new Date().getFullYear()} Blue Lagoon. Luxury beach journeys with local depth.
          </div>
        </div>
      </div>
    </footer>
  );
}
