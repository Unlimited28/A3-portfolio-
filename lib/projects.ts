export type Project = {
  slug: string;
  title: string;
  industry: string;
  liveUrl: string;
  description: string;
  result: string;
  deliverables: string[];
  stack: string[];
  package: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "grand-commodores",
    title: "Grand Commodores Hotel & Suites",
    industry: "Hospitality",
    liveUrl: "https://grandcommodores.com", // Placeholder
    description: "A digital experience for a 5-star hotel, focusing on seamless booking and visual storytelling.",
    result: "Full booking website live — rooms, amenities, gallery, reviews, admin portal",
    deliverables: ["UI/UX Design", "Custom Booking Engine", "Admin Dashboard", "Photography Art Direction"],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe"],
    package: "Premium",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "saint-hub",
    title: "Saint Hub Group",
    industry: "Corporate",
    liveUrl: "https://sainthub.com", // Placeholder
    description: "High-performance corporate portal for a multi-sector enterprise, optimizing internal workflows and stakeholder engagement.",
    result: "High-performance corporate portal — real-time reporting, stakeholder dashboard, brand hub",
    deliverables: ["Brand Identity", "Web Portal Development", "Internal Tools", "SEO Strategy"],
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    package: "Enterprise",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "nexus-grand",
    title: "Nexus Grand Hotel & Suites",
    industry: "Hospitality",
    liveUrl: "https://nexusgrand.com", // Placeholder
    description: "A premium hospitality platform designed for a modern audience, integrating concierge services and real-time management.",
    result: "Premium hospitality platform — multi-property management, guest experience suite, digital concierge",
    deliverables: ["Product Design", "Scalable Web Architecture", "Concierge API Integration"],
    stack: ["Next.js", "TypeScript", "Sanity CMS", "Vercel"],
    package: "Boutique",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
  },
];
