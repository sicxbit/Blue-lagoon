import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { Stay } from "@/models/stay.model";

interface StayCardProps {
  stay: Stay;
  compact?: boolean;
}

export function StayCard({ stay, compact = false }: StayCardProps) {
  return (
    <div
      className={`premium-card wave-card soft-hover ${compact ? "flex gap-4 p-4" : "grid gap-4 p-4 md:grid-cols-[140px_1fr]"}`}
    >
      <div className={`relative overflow-hidden rounded-[22px] ${compact ? "h-24 w-24 shrink-0 self-start" : "h-32"}`}>
        <Image src={stay.image} alt={stay.name} fill className="object-cover" sizes={compact ? "96px" : "140px"} />
      </div>
      <div className="min-w-0 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className={`${compact ? "font-semibold" : "text-lg font-semibold"} text-[var(--ocean-deep)]`}>{stay.name}</h3>
          <Badge variant="default">{stay.type}</Badge>
        </div>
        <p className="text-sm text-[var(--text-muted)]">{stay.location}</p>
        <p className="text-sm leading-7 text-[var(--text-muted)]">{stay.description}</p>
        {!compact ? (
          <div className="flex flex-wrap gap-2">
            {stay.amenities.map((amenity) => (
              <span
                key={amenity}
                className="rounded-full bg-[rgba(8,126,139,0.08)] px-3 py-1 text-xs font-medium text-[var(--ocean-deep)]"
              >
                {amenity}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
