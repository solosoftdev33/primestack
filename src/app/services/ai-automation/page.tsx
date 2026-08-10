import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "ai-automation")!;

export const metadata = createMetadata({
  title: "AI Automation & AI Receptionist for US Businesses",
  description:
    "AI receptionists, chatbots, lead follow-up, and workflow automation that answer fast, qualify leads, and route work automatically.",
  path: "/services/ai-automation",
});

export default function AIAutomationPage() {
  return <ServiceDetail service={service} />;
}
