import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "custom-software")!;

export const metadata = createMetadata({
  title: "Custom Software Development & Business Applications",
  description:
    "Web apps, customer portals, admin dashboards, and internal tools built around your exact workflow — not forced into a template.",
  path: "/services/custom-software",
});

export default function CustomSoftwarePage() {
  return <ServiceDetail service={service} />;
}
