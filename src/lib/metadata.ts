import type { Metadata } from "next";
import { siteConfig } from "./site-content";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  const fullTitle =
    title === siteConfig.name ? siteConfig.name : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — AI-native systems for US businesses`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}
