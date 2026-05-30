import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "custom-software")!;

export const metadata = createMetadata({
  title: "Custom Software Development",
  description:
    "PrimeStack builds custom web apps, portals, dashboards, and internal business tools for growing companies.",
  path: "/services/custom-software",
});

export default function CustomSoftwarePage() {
  return <ServiceDetail service={service} />;
}
