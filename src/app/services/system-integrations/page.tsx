import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "system-integrations")!;

export const metadata = createMetadata({
  title: "System Integrations",
  description:
    "Connect your existing tools — CRMs, ERPs, payment gateways, marketing platforms — into one unified operations layer.",
  path: "/services/system-integrations",
});

export default function SystemIntegrationsPage() {
  return <ServiceDetail service={service} />;
}
