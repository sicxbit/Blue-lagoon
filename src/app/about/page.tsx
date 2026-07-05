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
            title="A premium ocean travel brand with a calmer visual system."
            description="This pass keeps the beach-and-luxury feel intact while making typography, spacing, cards, and brand color usage more consistent across the site."
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
                  Blue Lagoon is built for travelers who want a luxury beach mood without sacrificing clarity. We shape polished escapes around shoreline stays, thoughtful pacing, and strong local context.
                </p>
              </Card>
              <Card variant="default" className="space-y-4">
                <h2 className="font-display text-4xl leading-none text-[var(--ocean-deep)]">Our mission</h2>
                <p className="text-sm leading-8 text-[var(--text-muted)]">
                  Deliver calm, premium planning experiences on both the public site and the admin side, so curated travel content can scale cleanly before a backend arrives.
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
                title: "Shared theme tokens",
                description: "Global ocean, aqua, sand, sun, and mist variables now anchor the visual system.",
              },
              {
                title: "Reusable components",
                description: "Buttons, cards, inputs, badges, section headers, and shells now keep page styling consistent.",
              },
              {
                title: "Admin foundation",
                description: "The site now includes a protected admin shell for packages, stays, and guides using the existing cookie flow.",
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
