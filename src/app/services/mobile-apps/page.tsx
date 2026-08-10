import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "mobile-apps")!;

export const metadata = createMetadata({
  title: "Mobile App Development (iOS & Android)",
  description:
    "Cross-platform iOS and Android apps built from one codebase for customers, crews, and field teams — ordering, booking, and tracking.",
  path: "/services/mobile-apps",
});

export default function MobileAppsPage() {
  return <ServiceDetail service={service} />;
}
