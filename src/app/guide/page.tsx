import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { buttonStyles } from "@/components/ui/Button";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { publicNavigation } from "@/lib/navigation";

const guideSteps = [
  {
    title: "Browse packages",
    description: "Visitors start on the homepage or packages page to explore curated tropical getaways.",
  },
  {
    title: "Open package details",
    description: "Each package detail view shows itinerary, inclusions, stays, and local guide recommendations.",
  },
  {
    title: "Review stays and guides",
    description: "Visitors can check recommended hotels and the dedicated guides page before making an inquiry.",
  },
  {
    title: "Admin login",
    description: "Admins sign in at `/login` using the local demo credentials to enter the protected workspace.",
  },
  {
    title: "Manage content",
    description: "The admin area includes packages, hotels/stays, and guides with demo create/edit/delete actions.",
  },
  {
    title: "Know the current limitation",
    description: "Persistence is still future work, so admin changes are UI-only until a real API and database are added.",
  },
];

export default function GuidePage() {
  return (
    <div className="bg-beach-app overflow-x-hidden">
      <Navbar navigationItems={publicNavigation} mode="solid" />

      <section className="pt-32">
        <PageShell className="section-gap">
          <SectionHeader
            eyebrow="How to use"
            title="Blue Lagoon quick guide"
            description="A short walkthrough for visitors and admins using the current beach-glass demo experience."
            actions={<Link href="/login" className={buttonStyles({ variant: "secondary", size: "md" })}>Open admin login</Link>}
          />

          <Card variant="default" className="space-y-4">
            <Badge variant="accent" className="sun-badge">
              Demo credentials
            </Badge>
            <p className="text-sm leading-7 text-[var(--text-main)]">
              Admin email: <strong>admin@bluelagoon.com</strong>
            </p>
            <p className="text-sm leading-7 text-[var(--text-main)]">
              Admin password: <strong>password</strong>
            </p>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {guideSteps.map((step, index) => (
              <Card key={step.title} variant="default" className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--ocean)]">
                  Step {index + 1}
                </p>
                <h2 className="text-2xl font-semibold text-[var(--ocean-deep)]">{step.title}</h2>
                <p className="text-sm leading-7 text-[var(--text-muted)]">{step.description}</p>
              </Card>
            ))}
          </div>
        </PageShell>
      </section>

      <Footer />
    </div>
  );
}
