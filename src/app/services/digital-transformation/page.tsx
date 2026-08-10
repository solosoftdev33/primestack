import ServiceDetail from "@/components/marketing/ServiceDetail";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

const service = services.find((item) => item.slug === "digital-transformation")!;

export const metadata = createMetadata({
  title: "Digital Transformation & Legacy System Modernization",
  description:
    "Modernize legacy systems, paper processes, and disconnected tools into scalable digital operations your team will actually use.",
  path: "/services/digital-transformation",
});

export default function DigitalTransformationPage() {
  return <ServiceDetail service={service} />;
}
