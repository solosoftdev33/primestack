import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "odoo-development")!;

export const metadata = createMetadata({
  title: "Odoo Development and Implementation",
  description:
    "PrimeStack provides Odoo implementation, custom module development, integrations, migration, and support.",
  path: "/services/odoo-development",
});

export default function OdooDevelopmentPage() {
  return <ServiceDetail service={service} />;
}
