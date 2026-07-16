import type { Metadata } from "next";

import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Review FUDDLR's terms, pricing, ordering, and account policies before using the website or placing an order.",
  path: "/terms-and-conditions",
  noIndex: true,
});

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
