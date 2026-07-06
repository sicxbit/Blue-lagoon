"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { TourPackageCard } from "@/components/sections/packages/TourPackageCard";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { searchPublishedPackages } from "@/controllers/package.controller";
import { publicNavigation } from "@/lib/navigation";

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTours = searchPublishedPackages(searchQuery);

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
              <h1 className="mt-4 max-w-[860px] font-display text-[clamp(3.2rem,6.4vw,5.6rem)] leading-[0.92]">Lakshadweep island journeys with trusted local partners.</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/88">
                Explore Blue Lagoon packages built around verified stays, local guides, and curated experiences across Lakshadweep.
              </p>
            </div>
          </PageShell>
        </div>
      </section>

      <section className="public-section-muted section-space">
        <PageShell className="section-gap">
          <Card variant="section" className="space-y-6">
            <SectionHeader
              eyebrow="Browse"
              title="Find the right island escape."
              description="Search by Lakshadweep destination, package title, or status while comparing stays and guide-connected journeys."
            />
            <div className="grid gap-4 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-center">
              <Input
                label="Search packages"
                placeholder="Try Agatti, Bangaram, published..."
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
