import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { publicNavigation } from "@/lib/navigation";

export default function AboutPage() {
  return (
    <div className="bg-beach-app overflow-x-hidden">
      <Navbar navigationItems={publicNavigation} mode="solid" />

      <section className="pt-32">
        <PageShell className="space-y-8">
          <SectionHeader
            eyebrow="About Blue Lagoon"
            title="Lakshadweep stays, guides, and island journeys in one trusted platform."
            description="Blue Lagoon is being shaped as a premium marketplace that connects tourists with verified local hospitality partners across Lakshadweep."
          />

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Card variant="default" className="overflow-hidden p-0">
              <div className="relative min-h-[420px]">
                <Image src="/assets/imgs/banner/about_us 1.png" alt="Ocean aerial" fill className="object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
              </div>
            </Card>

            <div className="grid gap-6">
              <Card variant="default" className="space-y-4">
                <h2 className="font-display text-4xl leading-none text-[var(--ocean-deep)]">Who we are</h2>
                <p className="text-sm leading-8 text-[var(--text-muted)]">
                  Blue Lagoon helps travelers discover trusted guides, curated stays, and island experiences across Lakshadweep through one polished discovery layer.
                </p>
              </Card>
              <Card variant="default" className="space-y-4">
                <h2 className="font-display text-4xl leading-none text-[var(--ocean-deep)]">Our mission</h2>
                <p className="text-sm leading-8 text-[var(--text-muted)]">
                  Build an investor-ready Lakshadweep tourism platform that gives tourists more confidence and gives local vendors a better path to qualified leads.
                </p>
              </Card>
            </div>
          </div>
        </PageShell>
      </section>

      <section className="section-space">
        <PageShell className="section-gap">
          <SectionHeader
            eyebrow="What changed"
            title="The design now feels more cohesive on purpose."
            description="We replaced scattered hardcoded yellows, blues, grays, and overlays with shared ocean theme tokens and reusable UI surfaces."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Lakshadweep-exclusive focus",
                description: "All public discovery is centered on island stays, guides, and experiences across Lakshadweep.",
              },
              {
                title: "Reusable platform surfaces",
                description: "Buttons, cards, inputs, badges, section headers, and shells keep the product presentation polished across the site.",
              },
              {
                title: "Vendor workspace",
                description: "The protected `/admin` route remains in place technically, while visible UI is positioned as a vendor-facing partner workspace.",
              },
            ].map((item) => (
              <Card key={item.title} variant="default" className="space-y-4">
                <h3 className="text-xl font-semibold text-[var(--ocean-deep)]">{item.title}</h3>
                <p className="text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
              </Card>
            ))}
          </div>
        </PageShell>
      </section>

      <Footer />
    </div>
  );
}
