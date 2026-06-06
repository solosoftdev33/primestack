import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "website-development")!;

export const metadata = createMetadata({
  title: "Website Development",
  description:
    "High-conversion websites, landing pages, and web experiences built for performance, SEO, and lead generation.",
  path: "/services/website-development",
});

export default function WebsiteDevelopmentPage() {
  return <ServiceDetail service={service} />;
}
