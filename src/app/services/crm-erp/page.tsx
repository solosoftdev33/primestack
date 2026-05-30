import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "crm-erp")!;

export const metadata = createMetadata({
  title: "CRM and ERP Systems",
  description:
    "PrimeStack implements CRM and ERP systems that centralize customers, sales, inventory, operations, and reporting.",
  path: "/services/crm-erp",
});

export default function CrmErpPage() {
  return <ServiceDetail service={service} />;
}
