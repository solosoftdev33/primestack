import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetail from "@/components/marketing/IndustryDetail";
import { createMetadata } from "@/lib/metadata";
import { industries } from "@/lib/site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return {};
  }

  return createMetadata({
    title: `${industry.title} Solutions`,
    description: industry.description,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetail industry={industry} />;
}
