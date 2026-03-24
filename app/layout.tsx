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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
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
        {/* Schema.org – WebSite + Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  name: SITE_NAME,
                  url: SITE_URL,
                  description: SITE_DESCRIPTION,
                  inLanguage: "es",
                },
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: SITE_NAME,
                  url: SITE_URL,
                  description: SITE_DESCRIPTION,
                  inLanguage: "es",
                  legalName: "Inversiones SHISHO SL",
                  taxID: "B70319223",
                  email: "info@rentabilismo.es",
                  areaServed: {
                    "@type": "AdministrativeArea",
                    name: "España",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Ronda de Montealto, 4",
                    postalCode: "15002",
                    addressLocality: "A Coruña",
                    addressRegion: "Galicia",
                    addressCountry: "ES",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        {/* Skip-to-content — accesibilidad de teclado (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-r-green focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-r-white focus:no-underline"
        >
          Saltar al contenido principal
        </a>
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
