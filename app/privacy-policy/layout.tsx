import type { Metadata } from "next";

import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how FUDDLR collects, stores, and uses personal information submitted through our website and forms.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
