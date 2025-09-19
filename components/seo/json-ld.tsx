"use client";

import Script from "next/script";
import { useSEO, fallbackSEO } from "@/lib/useSEO";

export function JsonLdSchemas() {
  const { seoData } = useSEO();
  const currentSEO = seoData || fallbackSEO;

  return (
    <>
      {/* Organization Schema */}
      {currentSEO.jsonLd.organization &&
        Object.keys(currentSEO.jsonLd.organization).length > 0 && (
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(currentSEO.jsonLd.organization),
            }}
          />
        )}

      {/* Person Schema */}
      {currentSEO.jsonLd.person &&
        Object.keys(currentSEO.jsonLd.person).length > 0 && (
          <Script
            id="person-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(currentSEO.jsonLd.person),
            }}
          />
        )}

      {/* Service Schema */}
      {currentSEO.jsonLd.service &&
        Object.keys(currentSEO.jsonLd.service).length > 0 && (
          <Script
            id="service-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(currentSEO.jsonLd.service),
            }}
          />
        )}

      {/* Website Schema */}
      {currentSEO.jsonLd.website &&
        Object.keys(currentSEO.jsonLd.website).length > 0 && (
          <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(currentSEO.jsonLd.website),
            }}
          />
        )}

      {/* FAQ Schema */}
      {currentSEO.jsonLd.faq &&
        Object.keys(currentSEO.jsonLd.faq).length > 0 && (
          <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(currentSEO.jsonLd.faq),
            }}
          />
        )}

      {/* Breadcrumb Schema */}
      {currentSEO.jsonLd.breadcrumb &&
        Object.keys(currentSEO.jsonLd.breadcrumb).length > 0 && (
          <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(currentSEO.jsonLd.breadcrumb),
            }}
          />
        )}
    </>
  );
}
