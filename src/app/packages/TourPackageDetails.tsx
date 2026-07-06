import Image from "next/image";
import Link from "next/link";
import { Calendar, Check, Clock3, Hotel, MapPin, Star, Users } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getPackageGuides } from "@/controllers/guide.controller";
import { getPackageStays } from "@/controllers/stay.controller";
import { publicNavigation } from "@/lib/navigation";
import type { Package } from "@/models/package.model";
import { GuideCard } from "@/views/cards/GuideCard";
import { StayCard } from "@/views/cards/StayCard";
import { formatInr } from "@/services/currency.service";

interface TourPackageDetailProps {
  tour: Package;
}

export default function TourPackageDetail({ tour }: TourPackageDetailProps) {
  const relatedHotels = getPackageStays(tour.hotels);
  const relatedGuides = getPackageGuides(tour.guides);

  return (
    <div className="bg-beach-app overflow-x-hidden">
      <Navbar navigationItems={publicNavigation} mode="transparent" />

      <section className="relative overflow-hidden pt-28">
        <div className="relative h-[520px]">
          <Image src={tour.image} alt={tour.title} fill priority className="object-cover" sizes="100vw" />
          <div className="hero-overlay absolute inset-0" />
          <PageShell width="wide" className="relative flex h-full items-end pb-12">
            <div className="max-w-4xl text-white">
              <div className="mb-5 flex flex-wrap gap-2">
                {tour.featured ? <Badge variant="accent">Featured</Badge> : null}
                <Badge variant="default" className="bg-white/18 text-white">
                  {tour.destination}
                </Badge>
                <Badge variant="default" className="bg-white/18 text-white">
                  {tour.status}
                </Badge>
              </div>
              <h1 className="font-display text-[clamp(3rem,6vw,5.6rem)] leading-[0.92] max-w-[900px]">{tour.title}</h1>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/82">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[var(--sun)]" />
                  {tour.destination}
                </p>
                <p className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[var(--sun)]" />
                  {tour.duration}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[var(--sun)]" />
                  {tour.groupSize}
                </p>
                <p className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-[var(--sun)] text-[var(--sun)]" />
                  {tour.rating.toFixed(1)} | {tour.reviews} reviews
                </p>
              </div>
            </div>
          </PageShell>
        </div>
      </section>

      <section className="public-section section-space">
        <PageShell className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_380px] lg:items-start">
          <div className="space-y-6">
            <Card variant="default" className="space-y-5">
              <SectionHeader
                eyebrow="Overview"
                title="Your Lakshadweep trip brief"
                description={tour.description}
              />
              <div className="grid gap-3 md:grid-cols-2">
                {tour.highlights.map((highlight) => (
                  <div key={highlight} className="flex gap-3 rounded-[22px] bg-[rgba(8,126,139,0.05)] p-4">
                    <Check className="mt-0.5 h-4 w-4 text-[var(--ocean)]" />
                    <p className="text-sm leading-7 text-[var(--text-main)]">{highlight}</p>
                  </div>
                ))}
              </div>
            </Card>

            {tour.itinerary?.length ? (
              <Card variant="default" className="space-y-6">
                <SectionHeader
                  eyebrow="Itinerary"
                  title="How the days unfold"
                  description="Verified local partner data now feeds a cleaner Lakshadweep trip timeline."
                />
                <div className="space-y-5">
                  {tour.itinerary.map((day) => (
                    <div key={`${tour.id}-${day.day}`} className="glass-panel soft-hover flex gap-4 rounded-[24px] border border-[var(--border-soft)] p-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(94,211,208,0.2)] text-sm font-semibold text-[var(--ocean-deep)]">
                        {day.day}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-[var(--ocean-deep)]">{day.title}</h3>
                        <p className="text-sm leading-7 text-[var(--text-muted)]">{day.description}</p>
                        {day.activities?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {day.activities.map((activity) => (
                              <span
                                key={activity}
                                className="rounded-full bg-[rgba(246,200,95,0.18)] px-3 py-1 text-xs font-medium text-[var(--ocean-deep)]"
                              >
                                {activity}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ) : null}

            <div className="grid gap-6 md:grid-cols-2">
              {tour.inclusions?.length ? (
                <Card variant="default" className="space-y-4">
                  <SectionHeader eyebrow="Included" title="Trip inclusions" />
                  <div className="space-y-3">
                    {tour.inclusions.map((item) => (
                      <p key={item} className="text-sm leading-7 text-[var(--text-main)]">
                        - {item}
                      </p>
                    ))}
                  </div>
                </Card>
              ) : null}

              {tour.exclusions?.length ? (
                <Card variant="default" className="space-y-4">
                  <SectionHeader eyebrow="Plan ahead" title="Not included" />
                  <div className="space-y-3">
                    {tour.exclusions.map((item) => (
                      <p key={item} className="text-sm leading-7 text-[var(--text-main)]">
                        - {item}
                      </p>
                    ))}
                  </div>
                </Card>
              ) : null}
            </div>

            {relatedHotels.length ? (
              <Card variant="default" className="space-y-6">
                <SectionHeader
                  eyebrow="Recommended stays"
                  title="Matched stays for this journey"
                  description="These stay suggestions come from Blue Lagoon's Lakshadweep partner network."
                />
                <div className="grid gap-4">
                  {relatedHotels.map((stay) => <StayCard key={stay.id} stay={stay} />)}
                </div>
              </Card>
            ) : null}

            {relatedGuides.length ? (
              <Card variant="default" className="space-y-6">
                <SectionHeader
                  eyebrow="Local guides"
                  title="Verified hosts for this itinerary"
                  description="Guide cards appear when a Lakshadweep host is attached to the package."
                />
                <div className="grid gap-4 md:grid-cols-2">
                  {relatedGuides.map((guide) => <GuideCard key={guide.id} guide={guide} />)}
                </div>
              </Card>
            ) : null}
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <Card variant="default" className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">From</p>
                <p className="mt-2 text-4xl font-semibold text-[var(--ocean-deep)]">{formatInr(tour.price)}</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Per traveler, depending on season and partner availability.</p>
              </div>
              <div className="grid gap-4">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[var(--text-main)]">Preferred date</span>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-xl border border-[var(--border-soft)] bg-white px-4 py-3 pl-11 text-sm text-[var(--text-main)] outline-none transition focus:border-[var(--ocean)] focus:ring-4 focus:ring-[rgba(94,211,208,0.18)]"
                    />
                  </div>
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[var(--text-main)]">Travelers</span>
                  <select className="w-full rounded-xl border border-[var(--border-soft)] bg-white px-4 py-3 text-sm text-[var(--text-main)] outline-none transition focus:border-[var(--ocean)] focus:ring-4 focus:ring-[rgba(94,211,208,0.18)]">
                    <option>2 travelers</option>
                    <option>4 travelers</option>
                    <option>6 travelers</option>
                    <option>8+ travelers</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-col gap-3">
                <button className={buttonStyles({ variant: "primary", size: "lg", fullWidth: true })}>Request itinerary</button>
                <Link href="/packages" className={buttonStyles({ variant: "secondary", size: "lg", fullWidth: true })}>
                  Back to packages
                </Link>
              </div>
              <div className="space-y-3 rounded-[24px] bg-[rgba(8,126,139,0.06)] p-4 text-sm text-[var(--text-muted)]">
                {tour.gettingThere ? <p>Getting there: {tour.gettingThere}</p> : null}
                {tour.accommodation ? <p>Accommodation: {tour.accommodation}</p> : null}
                {tour.meals ? <p>Meals: {tour.meals}</p> : null}
              </div>
            </Card>

            <Card variant="default" className="space-y-4">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-[var(--ocean-deep)]">
                <Hotel className="h-5 w-5 text-[var(--ocean)]" />
                Booking notes
              </h2>
              {(tour.importantNotes?.length ?? 0) > 0 ? (
                <div className="space-y-3 text-sm leading-7 text-[var(--text-muted)]">
                  {tour.importantNotes?.map((note) => <p key={note}>- {note}</p>)}
                </div>
              ) : (
                <p className="text-sm leading-7 text-[var(--text-muted)]">
                  This package is ready for inquiry through Blue Lagoon. TODO: connect the request flow to a real booking endpoint.
                </p>
              )}
            </Card>
          </div>
        </PageShell>
      </section>

      <Footer />
    </div>
  );
}
