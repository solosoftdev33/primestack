import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "ai-automation")!;

export const metadata = createMetadata({
  title: "AI Automation Services",
  description:
    "PrimeStack builds AI automation for lead follow-up, customer communication, CRM routing, and reporting workflows.",
  path: "/services/ai-automation",
});

export default function AIAutomationPage() {
  return <ServiceDetail service={service} />;
}
