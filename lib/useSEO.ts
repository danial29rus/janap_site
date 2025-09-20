"use client";

import { useState, useEffect } from "react";

interface SEOController {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    siteName: string;
    siteUrl: string;
    locale: string;
    type: string;
  };
  openGraph: {
    title: string;
    description: string;
    image: {
      url: string;
      width: number;
      height: number;
      alt: string;
    };
    siteName: string;
    locale: string;
  };
  twitter: {
    card: string;
    site: string;
    creator: string;
    title: string;
    description: string;
    image: string;
  };
  jsonLd: {
    organization: any;
    person: any;
    service: any;
    website: any;
    faq: any;
    breadcrumb: any;
  };
  robots: {
    index: boolean;
    follow: boolean;
    noarchive: boolean;
    nosnippet: boolean;
    noimageindex: boolean;
    maxImagePreview: string;
    maxSnippet: number;
    maxVideoPreview: number;
  };
  canonical: string;
  alternates: any[];
  verification: {
    google: string;
    yandex: string;
    bing: string;
  };
}

export function useSEO() {
  const [seoData, setSeoData] = useState<SEOController | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSEO = async () => {
      try {
        const response = await fetch("/seocontroller.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSeoData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load SEO data"
        );
        console.error("Error loading seocontroller.json:", err);
      } finally {
        setLoading(false);
      }
    };

    loadSEO();
  }, []);

  return { seoData, loading, error };
}

// Fallback SEO data for SSG build
export const fallbackSEO: SEOController = {
  meta: {
    title: "JPN Visa - Виза в Японию без стресса",
    description: "Профессиональное оформление визы в Японию за 5-10 дней",
    keywords: ["виза в Японию", "японская виза", "оформление визы"],
    author: "Ирина Миронова",
    siteName: "JPN Visa",
    siteUrl: "https://visa-mironova.ru",
    locale: "ru_RU",
    type: "website",
  },
  openGraph: {
    title: "JPN Visa - Виза в Японию без стресса",
    description: "Профессиональное оформление визы в Японию",
    image: {
      url: "/web-app-manifest-512x512.png",
      width: 512,
      height: 512,
      alt: "JPN Visa",
    },
    siteName: "JPN Visa",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jpnvisa",
    creator: "@jpnvisa",
    title: "JPN Visa - Виза в Японию без стресса",
    description: "Профессиональное оформление визы в Японию",
    image: "/web-app-manifest-512x512.png",
  },
  jsonLd: {
    organization: {},
    person: {},
    service: {},
    website: {},
    faq: {},
    breadcrumb: {},
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    maxImagePreview: "large",
    maxSnippet: -1,
    maxVideoPreview: -1,
  },
  canonical: "https://visa-mironova.ru",
  alternates: [],
  verification: {
    google: "",
    yandex: "",
    bing: "",
  },
};
