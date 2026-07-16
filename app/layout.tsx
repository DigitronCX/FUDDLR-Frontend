import type { Metadata } from "next";
import { Poppins, Young_Serif, Unbounded } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JumpToTop from "@/components/JumpToTop";
import { siteConfig } from "./seo";

const youngSerif = Young_Serif({
  variable: "--font-youngSerif",
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  verification: {
    google: 'DckUgPhUJ8Wc8ejeV3oMZlhjffKEOQQ8zHTWzVdkcLo',
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "pet supplies wholesale",
    "pet distribution",
    "Australian pet retailers",
    "wholesale pet brands",
    "pet nutrition",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
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
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${youngSerif.variable} ${unbounded.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="font-poppins min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: new URL("/Logo/LogoWhite.png", siteConfig.url).toString(),
              sameAs: [
                "https://www.facebook.com/fuddlr/",
                "https://www.instagram.com/fuddlr/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "0416 165 987",
                  contactType: "customer support",
                  availableLanguage: ["en"],
                },
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <JumpToTop />
      </body>
    </html>
  );
}