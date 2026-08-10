import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "crm-erp")!;

export const metadata = createMetadata({
  title: "CRM & ERP Systems — Setup, Customization & Migration",
  description:
    "Centralize customers, sales, inventory, and jobs in one system. CRM and ERP setup, customization, and migration from spreadsheets and disconnected tools.",
  path: "/services/crm-erp",
});

export default function CrmErpPage() {
  return <ServiceDetail service={service} />;
}
