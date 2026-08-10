import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "odoo-development")!;

export const metadata = createMetadata({
  title: "Odoo Development, Implementation & Custom Modules",
  description:
    "Odoo implementation, custom module development, data migration, integrations, and training — so the system fits your business, not the other way around.",
  path: "/services/odoo-development",
});

export default function OdooDevelopmentPage() {
  return <ServiceDetail service={service} />;
}
