import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { buttonStyles } from "@/components/ui/Button";
import type { TourPackage } from "@/lib/tours";

interface TourPackageCardProps {
  tour: TourPackage;
}

export function TourPackageCard({ tour }: TourPackageCardProps) {
  return (
    <Card variant="default" className="premium-card wave-card soft-hover ocean-shimmer p-0">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          className="transition-smooth h-full w-full object-cover hover:scale-105"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(3,59,74,0.42)] via-[rgba(3,59,74,0.08)] to-transparent" />
        <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">
          <Badge variant="accent" className="shadow-[0_10px_24px_rgba(6,59,76,0.16)]">{tour.destination}</Badge>
          <div className="rounded-full border border-white/55 bg-[rgba(255,255,255,0.88)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ocean-deep)] backdrop-blur-md">
            {tour.status}
          </div>
        </div>
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="mb-3 flex items-center gap-2 text-sm text-white/82">
            <Star className="h-4 w-4 fill-[var(--sun)] text-[var(--sun)]" />
            <span>
              {tour.rating.toFixed(1)} | {tour.reviews} reviews
            </span>
          </div>
          <h3 className="max-w-[16ch] font-display text-3xl leading-none">{tour.title}</h3>
        </div>
      </div>

      <div className="premium-card-surface space-y-6 px-6 pb-6 pt-5">
        <div className="grid gap-3 text-sm text-[var(--text-muted)] sm:grid-cols-3">
          <p className="flex items-center gap-2 rounded-full bg-white/46 px-3 py-2">
            <Clock3 className="h-4 w-4 text-[var(--ocean)]" />
            {tour.duration}
          </p>
          <p className="flex items-center gap-2 rounded-full bg-white/46 px-3 py-2">
            <Users className="h-4 w-4 text-[var(--ocean)]" />
            {tour.groupSize}
          </p>
          <p className="flex items-center gap-2 rounded-full bg-white/46 px-3 py-2">
            <MapPin className="h-4 w-4 text-[var(--ocean)]" />
            {tour.destination}
          </p>
        </div>

        <p className="text-sm leading-7 text-[var(--text-muted)]">{tour.description}</p>

        <div className="flex flex-wrap gap-2.5">
          {tour.highlights.slice(0, 3).map((highlight) => (
            <p
              key={highlight}
              className="rounded-full border border-white/50 bg-white/54 px-3.5 py-2 text-sm text-[var(--text-main)] shadow-[inset_0_1px_0_rgba(255,255,255,0.32)]"
            >
              {highlight}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-[30px] border border-white/42 bg-[linear-gradient(135deg,rgba(255,255,255,0.42)_0%,rgba(226,245,247,0.56)_100%)] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">From</p>
            <p className="mt-1 text-2xl font-semibold text-[var(--ocean-deep)]">${tour.price.toLocaleString()}</p>
          </div>
          <Link href={`/packages/details/${tour.id}`} className={buttonStyles({ variant: "primary", size: "md" })}>
            View journey
          </Link>
        </div>
      </div>
    </Card>
  );
}
