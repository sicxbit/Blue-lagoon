"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { TourPackageCard } from "@/components/sections/packages/TourPackageCard";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { packages } from "@/lib/data/packages";
import { publicNavigation } from "@/lib/navigation";

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTours = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase();

    if (!normalized) {
      return packages.filter((item) => item.status === "published");
    }

    return packages.filter(
      (item) =>
        item.status === "published" &&
        [item.title, item.destination, item.description, item.status].join(" ").toLowerCase().includes(normalized)
    );
  }, [searchQuery]);

  return (
    <div className="bg-beach-app overflow-x-hidden">
      <Navbar navigationItems={publicNavigation} mode="transparent" />

      <section className="relative overflow-hidden pt-28">
        <div className="relative h-[420px]">
          <Image src="/assets/imgs/banner/beach.jpg" alt="Packages hero" fill priority className="object-cover" sizes="100vw" />
          <div className="hero-overlay absolute inset-0" />
          <PageShell width="wide" className="relative flex h-full items-end pb-12">
            <div className="max-w-3xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sun)]">Packages</p>
              <h1 className="mt-4 font-display text-[clamp(3.2rem,6.4vw,5.6rem)] leading-[0.92] max-w-[860px]">Ocean-led itineraries with cleaner structure.</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/88">
                Shared cards, consistent spacing, and structured local data now power the public package catalog.
              </p>
            </div>
          </PageShell>
        </div>
      </section>

      <section className="mist-section scroll-wave-bg wave-divider-top section-space">
        <PageShell className="section-gap">
          <Card variant="default" className="space-y-6">
            <SectionHeader
              eyebrow="Browse"
              title="Find the right coastal escape."
              description="Search by destination, package title, or status. Public cards use the same design system as the rest of the site."
            />
            <div className="grid gap-4 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-center">
              <Input
                label="Search packages"
                placeholder="Try Maldives, Kerala, published..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <p className="glass-panel-strong rounded-2xl px-4 py-3 text-sm text-[var(--text-muted)]">
                Showing {filteredTours.length} {filteredTours.length === 1 ? "package" : "packages"}.
              </p>
            </div>
          </Card>

          {filteredTours.length ? (
            <div className="stagger-children grid gap-6 lg:grid-cols-3">
              {filteredTours.map((tour) => (
                <TourPackageCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <Card variant="default" className="text-center">
              <h2 className="text-2xl font-semibold text-[var(--ocean-deep)]">No packages found</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                Try another search term or clear the current query to see all published packages.
              </p>
            </Card>
          )}
        </PageShell>
      </section>

      <Footer />
    </div>
  );
}
