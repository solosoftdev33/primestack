import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "website-development")!;

export const metadata = createMetadata({
  title: "High-Conversion Website Development for Local & US Businesses",
  description:
    "Websites and landing pages built to capture leads, rank locally in Google, and turn visitors into calls and bookings — with clear CTAs your customers can't miss.",
  path: "/services/website-development",
});

export default function WebsiteDevelopmentPage() {
  return <ServiceDetail service={service} />;
}
