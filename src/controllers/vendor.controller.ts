import { getGuides, getPublishedGuides } from "@/services/guide.service";
import { getFeaturedPackages, getPackages, getPublishedPackages } from "@/services/package.service";
import { getPublishedStays, getStays } from "@/services/stay.service";

export function getVendorShowcaseGuides() {
  return getPublishedGuides();
}

export function getVendorDashboardOverview() {
  const packages = getPackages();
  const stays = getStays();
  const guides = getGuides();

  return {
    recentPackages: packages.slice(0, 4),
    stats: [
      {
        label: "Total Packages",
        value: packages.length,
        helper: `${getPublishedPackages().length} published`,
      },
      {
        label: "Hotels / Stays",
        value: stays.length,
        helper: `${getPublishedStays().length} published`,
      },
      {
        label: "Guides",
        value: guides.length,
        helper: `${getPublishedGuides().length} published`,
      },
      {
        label: "Featured Packages",
        value: getFeaturedPackages().length,
        helper: "Lakshadweep hero placements",
      },
    ],
  };
}
