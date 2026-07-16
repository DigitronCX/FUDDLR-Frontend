import type { Metadata } from "next";

export const siteConfig = {
  name: "FUDDLR Distribution",
  description:
    "FUDDLR is a pet supplies distribution business supplying trusted, high quality brands to retailers across Australia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fuddlr.com.au",
  ogImage: "/Sections/HeroHome.webp",
  twitterHandle: "@fuddlr",
  locale: "en_AU",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const robots: Metadata["robots"] = noIndex
    ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      };

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),

    alternates: path
      ? {
          canonical: path,
        }
      : undefined,

    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [image],
    },

    robots,
  };
}