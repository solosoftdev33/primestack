import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "digital-transformation")!;

export const metadata = createMetadata({
  title: "Digital Transformation",
  description:
    "End-to-end modernization of legacy systems, manual processes, and outdated infrastructure into scalable digital operations.",
  path: "/services/digital-transformation",
});

export default function DigitalTransformationPage() {
  return <ServiceDetail service={service} />;
}
