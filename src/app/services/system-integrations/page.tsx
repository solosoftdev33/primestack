import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "system-integrations")!;

export const metadata = createMetadata({
  title: "System Integrations & Custom API Development",
  description:
    "Connect your CRM, ERP, payments, email, and SMS tools so data flows automatically — no manual re-entry.",
  path: "/services/system-integrations",
});

export default function SystemIntegrationsPage() {
  return <ServiceDetail service={service} />;
}
