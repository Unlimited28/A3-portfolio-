import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://a3synergy.com";

export function constructMetadata({
  title = "A3 Synergy | Premium Web Design Agency in Nigeria",
  description = "A3 Synergy builds modern websites, booking systems, and digital experiences for African businesses.",
  image = "/og-default.svg",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      type: "website",
      siteName: "A3 Synergy",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@a3synergy",
    },
    icons: {
      icon: "/favicon.ico",
    },
    metadataBase: new URL(SITE_URL),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export const PAGE_METADATA = {
  home: constructMetadata({
    title: "A3 Synergy | Premium Web Design Agency in Nigeria",
    description: "A3 Synergy builds modern websites, booking systems, and digital experiences for African businesses.",
  }),
  work: constructMetadata({
    title: "Our Work | A3 Synergy",
    description: "Explore hospitality, corporate, and business website projects built by A3 Synergy.",
  }),
  services: constructMetadata({
    title: "Services | A3 Synergy",
    description: "Website design, booking systems, e-commerce solutions, SEO, and digital services for African businesses.",
  }),
  pricing: constructMetadata({
    title: "Pricing | A3 Synergy",
    description: "Transparent website pricing with flexible packages for businesses of all sizes.",
  }),
  contact: constructMetadata({
    title: "Contact A3 Synergy",
    description: "Start your next website project with A3 Synergy. Get in touch and receive a response within 24 hours.",
  }),
};
