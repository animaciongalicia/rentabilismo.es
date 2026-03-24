import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — El sistema para negocios realmente rentables`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "rentabilismo",
    "rentabilidad de negocio",
    "método 5P",
    "negocios rentables",
    "consultoría estratégica",
    "empresarios hispanohablantes",
    "mejora de negocio",
    "gestión empresarial",
  ],
  authors: [{ name: "Rentabilismo" }],
  creator: "Rentabilismo",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — El sistema para negocios realmente rentables`,
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — El sistema para negocios realmente rentables`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${lora.variable}`}>
      <head>
        {/* Schema.org – WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              inLanguage: "es",
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
