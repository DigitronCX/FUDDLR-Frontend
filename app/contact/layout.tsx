import type { Metadata } from "next";

import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact FUDDLR",
  description:
    "Contact FUDDLR for wholesale pet supply enquiries, retailer support, and brand partnership conversations.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
