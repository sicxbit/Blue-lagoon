import Image from "next/image";
import Link from "next/link";
import { Compass, MapPinned, ShieldCheck, Sparkles, Waves } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { TourPackageCard } from "@/components/sections/packages/TourPackageCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getPublishedGuideCount, getHomepageGuides } from "@/controllers/guide.controller";
import { getHomepageFeaturedPackages, getPublishedPackageCount } from "@/controllers/package.controller";
import { getPublishedStayCount, getHomepageStays } from "@/controllers/stay.controller";
import { publicNavigation } from "@/lib/navigation";
import { GuideCard } from "@/views/cards/GuideCard";
import { StayCard } from "@/views/cards/StayCard";

const featuredPackages = getHomepageFeaturedPackages();
const publishedGuides = getHomepageGuides();
const publishedStays = getHomepageStays();
const publishedPackageCount = getPublishedPackageCount();
const publishedStayCount = getPublishedStayCount();
const publishedGuideCount = getPublishedGuideCount();

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

        <PageShell width="wide" className="relative flex min-h-screen items-center pb-16 pt-32 md:pb-20 md:pt-36">
          <div className="mx-auto grid w-full max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,420px)] lg:items-center">
            <div className="mx-auto max-w-3xl space-y-7 text-white lg:mx-0">
              <Badge variant="accent" className="sun-badge">
                Lakshadweep travel platform
              </Badge>
              <div className="space-y-5">
                <h1 className="text-on-dark-glass font-display text-[clamp(3.8rem,8.4vw,8.25rem)] leading-[0.88] text-balance max-w-[950px]">
                  Trusted stays, guides, and island journeys across Lakshadweep.
                </h1>
                <p className="text-on-dark-glass max-w-2xl text-base leading-8 text-white/92 md:text-lg">
                  Blue Lagoon connects travelers with verified local guides, curated stays, and island experiences across Lakshadweep through one premium discovery platform.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/packages" className={buttonStyles({ variant: "primary", size: "lg" })}>
                  Explore packages
                </Link>
                <Link href="/signup" className={buttonStyles({ variant: "secondary", size: "lg" })}>
                  Join as vendor
                </Link>
              </div>
            </div>

            <Card variant="glass" className="mx-auto w-full max-w-[420px] space-y-6 text-white lg:mx-0 lg:justify-self-end">
              <div className="text-on-dark-glass flex items-center gap-3 text-sm text-white/92">
                <Waves className="h-4 w-4 text-[var(--sun)]" />
                Platform snapshot
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { label: "Island packages", value: publishedPackageCount, icon: Compass },
                  { label: "Verified stays", value: publishedStayCount, icon: MapPinned },
                  { label: "Local guides", value: publishedGuideCount, icon: ShieldCheck },
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

      <section className="public-section-muted section-space">
        <PageShell className="section-gap">
          <SectionHeader
            eyebrow="Featured journeys"
            title="Lakshadweep journeys shaped by trusted local partners."
            description="Blue Lagoon brings together verified guides, curated stays, and island-first itineraries across Lakshadweep in one premium marketplace experience."
            actions={<Link href="/packages" className={buttonStyles({ variant: "secondary", size: "md" })}>See all packages</Link>}
          />
          <div className="stagger-children grid items-stretch gap-6 lg:grid-cols-3">
            {featuredPackages.map((tour) => (
              <TourPackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        </PageShell>
      </section>

      <section className="public-section pb-16 md:pb-24">
        <PageShell>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Why Blue Lagoon"
                title="A trusted Lakshadweep marketplace with a premium guest experience."
                description="Blue Lagoon is built to help tourists discover verified island partners while giving local stays and guides a polished lead-generation platform."
              />
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Verified local partners",
                    description: "Every public listing is positioned around trusted Lakshadweep guides, stays, and island operators.",
                  },
                  {
                    title: "Lakshadweep only",
                    description: "The product stays focused on island-specific discovery instead of becoming a generic travel aggregator.",
                  },
                  {
                    title: "Vendor-ready pipeline",
                    description: "The current workspace is prepared for future onboarding, lead routing, and partner operations.",
                  },
                ].map((item) => (
                  <div key={item.title} className="glass-panel wave-card soft-hover rounded-[24px] p-5">
                    <Sparkles className="h-5 w-5 text-[var(--ocean)]" />
                    <h3 className="mt-4 text-lg font-semibold text-[var(--ocean-deep)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <SectionHeader
                eyebrow="Top stays"
                title="Stay partners built for island travel."
                description="Blue Lagoon helps travelers compare Lakshadweep stays while giving local vendors a clearer digital storefront."
              />
              <div className="space-y-4">
                {publishedStays.slice(0, 3).map((stay) => (
                  <StayCard key={stay.id} stay={stay} compact />
                ))}
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      <section className="public-section pb-16 md:pb-24">
        <PageShell>
          <Card variant="section" className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[340px]">
                <Image src="/assets/imgs/banner/about_us 1.png" alt="Aerial coast" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
              <div className="space-y-6 p-8 md:p-10">
                <SectionHeader
                  eyebrow="Guides"
                  title="Verified island hosts add confidence at every step."
                  description="Guide profiles help tourists evaluate trusted Lakshadweep experts while the vendor workspace keeps listings organized behind the scenes."
                />
                <div className="grid gap-4 md:grid-cols-2">
                  {publishedGuides.slice(0, 2).map((guide) => (
                    <GuideCard key={guide.id} guide={guide} compact />
                  ))}
                </div>
                <Link href="/vendor" className={buttonStyles({ variant: "secondary", size: "md" })}>
                  Meet our guides
                </Link>
                <Link href="/login" className={buttonStyles({ variant: "ghost", size: "md" })}>
                  Vendor login
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
