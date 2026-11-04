import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
// @ts-expect-error Next.js handles global CSS imports at build time.
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Nursery & Primary School in Kumasi, Ghana`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Edisam School",
    "school in Kumasi",
    "nursery school Kumasi",
    "primary school Kumasi",
    "kindergarten Kumasi",
    "private school Ghana",
    "school admission Kumasi",
  ],
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Kumasi, Ghana`,
    description: siteConfig.description,
    images: [{ url: "/images/logo.png", width: 410, height: 430, alt: `${siteConfig.name} crest` }],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | Kumasi, Ghana`,
    description: siteConfig.description,
    images: ["/images/logo.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#5A2323",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kumasi",
    addressRegion: "Ashanti",
    addressCountry: "GH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
