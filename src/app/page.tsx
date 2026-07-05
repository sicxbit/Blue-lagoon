import Image from "next/image";
import Link from "next/link";
import { Compass, MapPinned, ShieldCheck, Sparkles, Star, Waves } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { TourPackageCard } from "@/components/sections/packages/TourPackageCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { guides } from "@/lib/data/guides";
import { hotels } from "@/lib/data/hotels";
import { packages } from "@/lib/data/packages";
import { publicNavigation } from "@/lib/navigation";

const featuredPackages = packages.filter((item) => item.featured && item.status === "published");

export default function Home() {
  return (
    <div className="bg-beach-app overflow-x-hidden">
      <Navbar navigationItems={publicNavigation} mode="transparent" />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/assets/imgs/banner/background_image 2.png"
          alt="Ocean horizon"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />

        <PageShell width="wide" className="relative flex min-h-screen items-end pb-16 pt-36 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl space-y-7 text-white">
              <Badge variant="accent" className="sun-badge">
                Blue Lagoon ocean journeys
              </Badge>
              <div className="space-y-5">
                <h1 className="text-on-dark-glass font-display text-[clamp(3.8rem,8.4vw,8.25rem)] leading-[0.88] text-balance max-w-[950px]">
                  Designed around sea light, slow mornings, and unforgettable shores.
                </h1>
                <p className="text-on-dark-glass max-w-2xl text-base leading-8 text-white/92 md:text-lg">
                  Blue Lagoon curates beach escapes, island stays, and local guide experiences with a premium tropical mood from the first click to the final itinerary.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/packages" className={buttonStyles({ variant: "primary", size: "lg" })}>
                  Explore packages
                </Link>
                <Link href="/admin" className={buttonStyles({ variant: "secondary", size: "lg" })}>
                  Open admin demo
                </Link>
              </div>
            </div>

            <Card variant="glass" className="space-y-6 text-white">
              <div className="text-on-dark-glass flex items-center gap-3 text-sm text-white/92">
                <Waves className="h-4 w-4 text-[var(--sun)]" />
                Premium planning snapshot
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { label: "Featured escapes", value: featuredPackages.length, icon: Compass },
                  { label: "Partner stays", value: hotels.length, icon: MapPinned },
                  { label: "Trusted guides", value: guides.filter((item) => item.status === "published").length, icon: ShieldCheck },
                ].map((item) => (
                  <div key={item.label} className="glass-panel-strong wave-card soft-hover ocean-shimmer rounded-[24px] p-5 text-[var(--text-main)]">
                    <item.icon className="h-5 w-5 text-[var(--sun)]" />
                    <p className="mt-4 text-3xl font-semibold text-[var(--ocean-deep)]">{item.value}</p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{item.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </PageShell>
      </section>

      <section className="mist-section scroll-wave-bg wave-divider-top wave-divider-bottom section-space">
        <PageShell className="section-gap">
          <SectionHeader
            eyebrow="Featured journeys"
            title="Signature packages with a polished ocean mood."
            description="The most visible trips now share a unified Blue Lagoon design language: deep-ocean structure, mist surfaces, and sun-gold accents used with restraint."
            actions={<Link href="/packages" className={buttonStyles({ variant: "secondary", size: "md" })}>See all packages</Link>}
          />
          <div className="stagger-children grid gap-6 lg:grid-cols-3">
            {featuredPackages.map((tour) => (
              <TourPackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        </PageShell>
      </section>

      <section className="mist-section scroll-wave-bg wave-divider-top pb-16 md:pb-24">
        <PageShell>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card variant="default" className="space-y-6">
              <SectionHeader
                eyebrow="Why Blue Lagoon"
                title="A luxury beach feel without becoming a generic dashboard."
                description="We kept the travel-first personality and unified it through calmer surfaces, sharper typography, cleaner spacing, and shared ocean color tokens."
              />
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Curated pacing",
                    description: "Trips are structured for ease, with breathing room built into the itinerary.",
                  },
                  {
                    title: "Strong local hosts",
                    description: "Guides and stays are connected directly to package details for faster planning.",
                  },
                  {
                    title: "Admin-ready",
                    description: "The new admin foundation is ready for future API and database persistence.",
                  },
                ].map((item) => (
                  <div key={item.title} className="glass-panel wave-card soft-hover rounded-[24px] p-5">
                    <Sparkles className="h-5 w-5 text-[var(--ocean)]" />
                    <h3 className="mt-4 text-lg font-semibold text-[var(--ocean-deep)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card variant="default" className="space-y-5">
              <SectionHeader
                eyebrow="Top stays"
                title="Recommended stays that match the package mood."
                description="Structured local stay data now powers cleaner package storytelling and future admin workflows."
              />
              <div className="space-y-4">
                {hotels.slice(0, 3).map((stay) => (
                  <div key={stay.id} className="premium-card wave-card soft-hover flex gap-4 p-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-[20px]">
                      <Image src={stay.image} alt={stay.name} fill className="object-cover" sizes="96px" />
                    </div>
                    <div className="min-w-0 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-[var(--ocean-deep)]">{stay.name}</h3>
                        <Badge variant="default">{stay.type}</Badge>
                      </div>
                      <p className="text-sm text-[var(--text-muted)]">{stay.location}</p>
                      <p className="text-sm leading-6 text-[var(--text-muted)]">{stay.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </PageShell>
      </section>

      <section className="pb-16 md:pb-24">
        <PageShell>
          <Card variant="default" className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[340px]">
                <Image src="/assets/imgs/banner/about_us 1.png" alt="Aerial coast" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
              <div className="space-y-6 p-8 md:p-10">
                <SectionHeader
                  eyebrow="Guides"
                  title="Trusted local hosts add context, not clutter."
                  description="The `/vendor` route now acts as a cleaner guide showcase while the admin area keeps their bios, languages, and specialties editable in one place."
                />
                <div className="grid gap-4 md:grid-cols-2">
                  {guides.filter((guide) => guide.status === "published").slice(0, 2).map((guide) => (
                    <div key={guide.id} className="premium-card wave-card soft-hover p-5">
                      <div className="flex items-center gap-3">
                        <div className="relative h-14 w-14 overflow-hidden rounded-full">
                          <Image src={guide.image} alt={guide.name} fill className="object-cover" sizes="56px" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--ocean-deep)]">{guide.name}</h3>
                          <p className="text-sm text-[var(--text-muted)]">{guide.location}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{guide.bio}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-[var(--ocean)]">
                        <Star className="h-4 w-4 fill-[var(--sun)] text-[var(--sun)]" />
                        {guide.rating.toFixed(1)} rated host
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/vendor" className={buttonStyles({ variant: "secondary", size: "md" })}>
                  Meet our guides
                </Link>
                <Link href="/guide" className={buttonStyles({ variant: "ghost", size: "md" })}>
                  How to use Blue Lagoon
                </Link>
              </div>
            </div>
          </Card>
        </PageShell>
      </section>

      <Footer />
    </div>
  );
}
