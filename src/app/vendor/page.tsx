import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { PageShell } from "@/components/ui/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getVendorShowcaseGuides } from "@/controllers/vendor.controller";
import { publicNavigation } from "@/lib/navigation";
import { GuideCard } from "@/views/cards/GuideCard";

export default function VendorPage() {
  const publishedGuides = getVendorShowcaseGuides();

  return (
    <div className="bg-beach-app overflow-x-hidden">
      <Navbar navigationItems={publicNavigation} mode="solid" />

      <section className="public-section-muted pb-16 pt-32 md:pb-24">
        <PageShell className="section-gap">
          <SectionHeader
            eyebrow="Local guides"
            title="Meet verified Lakshadweep hosts and local experts."
            description="Blue Lagoon connects tourists with trusted island guides across Lakshadweep, alongside stay and activity partners."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {publishedGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </PageShell>
      </section>

      <Footer />
    </div>
  );
}
