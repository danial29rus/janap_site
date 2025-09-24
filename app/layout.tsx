import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLdSchemas } from "@/components/seo/json-ld";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// SEO data is now managed by seocontroller.json and useSEO hook
export const metadata: Metadata = {
  title: "Виза в Японию под ключ | Быстрое и надежное оформление",
  description:
    "Получите японскую визу всего за 5-7 дней. Полное сопровождение: проверка и подготовка документов, заполнение анкет. Более 200 успешных виз. Бесплатная консультация!",
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
      <body className={`${inter.className} antialiased`}>
        {children}
        <YandexMetrika />
      </body>
    </html>
  );
}
