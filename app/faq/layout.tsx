import type { Metadata } from "next";

import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Find answers to common questions about FUDDLR wholesale ordering, brand support, and retailer onboarding.",
  path: "/faq",
});

export default function FaqLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
