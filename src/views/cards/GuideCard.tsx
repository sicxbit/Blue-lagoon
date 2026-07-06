import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Guide } from "@/models/guide.model";

interface GuideCardProps {
  guide: Guide;
  compact?: boolean;
  showBio?: boolean;
}

export function GuideCard({ guide, compact = false, showBio = true }: GuideCardProps) {
  return (
    <div className={`premium-card wave-card soft-hover ${compact ? "p-5" : "space-y-5 p-5"} ocean-shimmer`}>
      <div className={compact ? "flex items-center gap-3" : "flex gap-4"}>
        <div className={`relative shrink-0 overflow-hidden ${compact ? "h-14 w-14 rounded-full" : "h-24 w-24 rounded-[24px]"}`}>
          <Image src={guide.image} alt={guide.name} fill className="object-cover" sizes={compact ? "56px" : "96px"} />
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className={`${compact ? "font-semibold" : "text-2xl font-semibold"} text-[var(--ocean-deep)]`}>{guide.name}</h2>
            {!compact ? <Badge variant="success">{guide.rating.toFixed(1)} rated</Badge> : null}
          </div>
          <p className="text-sm text-[var(--text-muted)]">{guide.location}</p>
          {!compact ? <p className="text-sm text-[var(--text-muted)]">{guide.languages.join(" / ")}</p> : null}
        </div>
      </div>

      {showBio ? <p className="text-sm leading-8 text-[var(--text-muted)]">{guide.bio}</p> : null}

      {compact ? (
        <div className="mt-4 flex items-center gap-2 text-sm text-[var(--ocean)]">
          <Star className="h-4 w-4 fill-[var(--sun)] text-[var(--sun)]" />
          {guide.rating.toFixed(1)} rated host
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {guide.specialties.map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-[rgba(246,200,95,0.18)] px-3 py-1 text-xs font-medium text-[var(--ocean-deep)]"
            >
              {specialty}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
