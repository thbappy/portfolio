// ============================================================
// Central SEO metadata & JSON-LD structured data
// ============================================================

import type { Metadata } from "next";

const SITE_URL = "https://tanbeer.digitalplatformbd.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Md. Tanbeer Hasan — Full Stack Developer | Portfolio",
    template: "%s | Md. Tanbeer Hasan",
  },
  description:
    "Portfolio of Md. Tanbeer Hasan — an experienced Full Stack Developer specializing in PHP, Laravel, Java Spring Boot, React, Next.js, Vue.js, Node.js, Docker & Linux. 5+ years building enterprise software.",
  keywords: [
    "Md. Tanbeer Hasan",
    "Full Stack Developer",
    "Software Engineer",
    "PHP Developer",
    "Laravel Developer",
    "Java Spring Boot",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Node.js Developer",
    "Bangladesh Developer",
    "Dhaka Software Engineer",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Md. Tanbeer Hasan", url: SITE_URL }],
  creator: "Md. Tanbeer Hasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Md. Tanbeer Hasan — Portfolio",
    title: "Md. Tanbeer Hasan — Full Stack Developer",
    description:
      "Experienced Full Stack Developer with 5+ years expertise in PHP, Laravel, Java Spring Boot, React, Next.js, Vue.js, Node.js, Docker & Linux.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Md. Tanbeer Hasan — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Tanbeer Hasan — Full Stack Developer",
    description:
      "Experienced Full Stack Developer with 5+ years expertise in PHP, Laravel, Java Spring Boot, React, Next.js, Vue.js, Node.js, Docker & Linux.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/**
 * JSON-LD structured data for the portfolio.
 * Includes Person + WebSite schemas for rich search results.
 */
export function getJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Md. Tanbeer Hasan",
      url: SITE_URL,
      jobTitle: "Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "G8ICT Limited",
      },
      sameAs: [
        "https://github.com/thbappy",
        "https://www.linkedin.com/in/md-tanbeer-hasan-92a5b0158/",
      ],
      email: "tanbeerhasan7@gmail.com",
      telephone: "+8801930285610",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka",
        postalCode: "1216",
        addressCountry: "BD",
      },
      knowsAbout: [
        "PHP",
        "Laravel",
        "Java",
        "Spring Boot",
        "JavaScript",
        "React",
        "Next.js",
        "Vue.js",
        "Node.js",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Linux",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Md. Tanbeer Hasan — Portfolio",
      url: SITE_URL,
      description:
        "Portfolio of Md. Tanbeer Hasan — Full Stack Developer with 5+ years experience.",
    },
  ];
}
