import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "mobile-apps")!;

export const metadata = createMetadata({
  title: "Mobile App Development",
  description:
    "Cross-platform mobile applications for iOS and Android using Flutter — built for speed, reliability, and user adoption.",
  path: "/services/mobile-apps",
});

export default function MobileAppsPage() {
  return <ServiceDetail service={service} />;
}
