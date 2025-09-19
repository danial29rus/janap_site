import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLdSchemas } from "@/components/seo/json-ld";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// SEO data is now managed by seocontroller.json and useSEO hook
export const metadata: Metadata = {
  title: "JPN Visa - Виза в Японию без стресса | Оформление японской визы",
  description:
    "⭐ Профессиональное оформление визы в Японию за 5-10 дней. Личное сопровождение, проверка документов, заполнение анкет. 1000+ успешных виз. Консультация бесплатно!",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#e11d48",
  colorScheme: "light",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <JsonLdSchemas />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
