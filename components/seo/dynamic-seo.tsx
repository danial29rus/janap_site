"use client";

import Head from "next/head";
import { useSEO, fallbackSEO } from "@/lib/useSEO";

export function DynamicSEO() {
  const { seoData } = useSEO();
  const currentSEO = seoData || fallbackSEO;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{currentSEO.meta.title}</title>
      <meta name="description" content={currentSEO.meta.description} />
      <meta name="keywords" content={currentSEO.meta.keywords.join(", ")} />
      <meta name="author" content={currentSEO.meta.author} />
      <link rel="canonical" href={currentSEO.canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={currentSEO.meta.type} />
      <meta property="og:title" content={currentSEO.openGraph.title} />
      <meta
        property="og:description"
        content={currentSEO.openGraph.description}
      />
      <meta property="og:image" content={currentSEO.openGraph.image.url} />
      <meta
        property="og:image:width"
        content={currentSEO.openGraph.image.width.toString()}
      />
      <meta
        property="og:image:height"
        content={currentSEO.openGraph.image.height.toString()}
      />
      <meta property="og:image:alt" content={currentSEO.openGraph.image.alt} />
      <meta property="og:site_name" content={currentSEO.openGraph.siteName} />
      <meta property="og:locale" content={currentSEO.openGraph.locale} />
      <meta property="og:url" content={currentSEO.meta.siteUrl} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={currentSEO.twitter.card} />
      <meta name="twitter:site" content={currentSEO.twitter.site} />
      <meta name="twitter:creator" content={currentSEO.twitter.creator} />
      <meta name="twitter:title" content={currentSEO.twitter.title} />
      <meta
        name="twitter:description"
        content={currentSEO.twitter.description}
      />
      <meta name="twitter:image" content={currentSEO.twitter.image} />

      {/* Robots */}
      <meta
        name="robots"
        content={[
          currentSEO.robots.index ? "index" : "noindex",
          currentSEO.robots.follow ? "follow" : "nofollow",
          currentSEO.robots.noarchive ? "noarchive" : "",
          currentSEO.robots.nosnippet ? "nosnippet" : "",
          currentSEO.robots.noimageindex ? "noimageindex" : "",
          `max-image-preview:${currentSEO.robots.maxImagePreview}`,
          `max-snippet:${currentSEO.robots.maxSnippet}`,
          `max-video-preview:${currentSEO.robots.maxVideoPreview}`,
        ]
          .filter(Boolean)
          .join(", ")}
      />

      {/* Verification */}
      {currentSEO.verification.google && (
        <meta
          name="google-site-verification"
          content={currentSEO.verification.google}
        />
      )}
      {currentSEO.verification.yandex && (
        <meta
          name="yandex-verification"
          content={currentSEO.verification.yandex}
        />
      )}
      {currentSEO.verification.bing && (
        <meta name="msvalidate.01" content={currentSEO.verification.bing} />
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={currentSEO.meta.siteName}
      />

      {/* Geo Location */}
      <meta name="geo.region" content="RU" />
      <meta name="geo.country" content="Russia" />
      <meta name="geo.placename" content="Moscow" />

      {/* Business Information */}
      <meta name="business:contact_data:locality" content="Moscow" />
      <meta name="business:contact_data:country_name" content="Russia" />
      <meta name="business:contact_data:email" content="info@jpn-visa.ru" />

      {/* Content Classification */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="expires" content="never" />

      {/* Language and Locale */}
      <meta name="language" content="Russian" />
      <meta httpEquiv="content-language" content="ru" />

      {/* Performance & Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="origin-when-cross-origin" />

      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//mc.yandex.ru" />

      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </Head>
  );
}
