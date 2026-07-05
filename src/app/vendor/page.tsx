import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { guides } from "@/lib/data/guides";
import { publicNavigation } from "@/lib/navigation";

export default function VendorPage() {
  const publishedGuides = guides.filter((guide) => guide.status === "published");

  return (
    <div className="bg-beach-app overflow-x-hidden">
      <Navbar navigationItems={publicNavigation} mode="solid" />

      <section className="mist-section scroll-wave-bg wave-divider-top pt-32">
        <PageShell className="section-gap">
          <SectionHeader
            eyebrow="Local guides"
            title="Meet the hosts behind the shoreline experience."
            description="The old vendor route now doubles as a cleaner guide showcase, powered by structured local guide data."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {publishedGuides.map((guide) => (
              <Card key={guide.id} variant="default" className="wave-card soft-hover ocean-shimmer space-y-5">
                <div className="flex gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[24px]">
                    <Image src={guide.image} alt={guide.name} fill className="object-cover" sizes="96px" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-2xl font-semibold text-[var(--ocean-deep)]">{guide.name}</h2>
                      <Badge variant="success">{guide.rating.toFixed(1)} rated</Badge>
                    </div>
                    <p className="text-sm text-[var(--text-muted)]">{guide.location}</p>
                    <p className="text-sm text-[var(--text-muted)]">{guide.languages.join(" / ")}</p>
                  </div>
                </div>

                <p className="text-sm leading-8 text-[var(--text-muted)]">{guide.bio}</p>

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
              </Card>
            ))}
          </div>
        </PageShell>
      </section>

      <Footer />
    </div>
  );
}
