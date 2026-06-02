export type Project = {
  slug: string;
  title: string;
  clientName?: string;
  industry: string;
  liveUrl: string;
  description: string;
  overview: string;
  designApproach: string;
  technicalBuild: string;
  result: string;
  deliverables: string[];
  stack: string[];
  package: string;
  image: string;
  gallery?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "grand-commodores",
    title: "Grand Commodores Hotel & Suites",
    clientName: "Grand Commodores",
    industry: "Hospitality",
    liveUrl: "https://grandcommodores.com",
    description: "A digital experience for a 5-star hotel, focusing on seamless booking and visual storytelling.",
    overview: "Grand Commodores Hotel & Suites required a modern hospitality platform capable of showcasing a luxury 50-suite property located on Victoria Island, Lagos. The objective was to build trust, improve discoverability, and create a seamless experience for guests exploring accommodations, amenities, and booking options. The final platform presents the hotel as a premium hospitality destination while maintaining strong performance and mobile usability.",
    designApproach: "The design focuses on high-end luxury with an editorial layout. We utilized a 'Gold & Near-Black' palette to evoke a sense of exclusivity, paired with expansive imagery of the property's suites and amenities. Typography plays a crucial role, using Cormorant Garamond for a classic hospitality feel, balanced by clean DM Sans for interface elements.",
    technicalBuild: "Built with Next.js for superior performance and SEO. The site features a custom booking inquiry system and a lightweight administrative portal for managing room availability and gallery updates. We prioritized image optimization and lazy loading to ensure the high-resolution photography doesn't compromise mobile performance.",
    result: "Full booking website live — rooms, amenities, gallery, reviews, admin portal",
    deliverables: [
      "Custom Next.js Build",
      "Mobile Responsive Layout",
      "Admin Portal for Management",
      "SEO Metadata Optimization",
      "WhatsApp Booking Integration",
      "High-Resolution Image Gallery"
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    package: "Premium",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    slug: "saint-hub",
    title: "Saint Hub Group",
    clientName: "Saint Hub Group",
    industry: "Corporate",
    liveUrl: "https://sainthub.com",
    description: "High-performance corporate portal for a multi-sector enterprise, optimizing internal workflows and stakeholder engagement.",
    overview: "Saint Hub Group required a corporate website capable of presenting a diversified investment group with multiple subsidiaries operating across several industries. The challenge was creating a unified digital presence while still giving each subsidiary its own identity and visibility. The final website established a professional corporate image while clearly communicating the group's structure and capabilities.",
    designApproach: "For a multi-sector investment group, the design needed to be clean, authoritative, and scalable. We implemented a unified visual language that uses subtle color variations to distinguish subsidiaries while maintaining a cohesive parent brand identity. The layout prioritizes clear information hierarchy and professional corporate aesthetics, emphasizing stability and growth.",
    technicalBuild: "A robust corporate architecture using Next.js. We focused on building a modular component system that allows for easy expansion as the group grows. The technical implementation includes optimized asset delivery and a focus on accessibility to ensure all stakeholders can access information seamlessly across devices.",
    result: "6-subsidiary group website — brand identity, individual sub-pages per company",
    deliverables: [
      "Multi-Subsidiary Architecture",
      "Unified Brand Identity",
      "Corporate SEO Strategy",
      "Interactive Group Structure",
      "Stakeholder Resource Center",
      "Performance-Optimized Core"
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    package: "Enterprise",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    slug: "nexus-grand",
    title: "Nexus Grand Hotel & Suites",
    clientName: "Nexus Grand",
    industry: "Hospitality",
    liveUrl: "https://nexusgrand.com",
    description: "A premium hospitality platform designed for a modern audience, integrating concierge services and real-time management.",
    overview: "Nexus Grand Hotel & Suites required a hospitality-focused platform highlighting accommodation options, amenities, and booking channels. The objective was to simplify the customer journey while promoting premium room offerings and increasing booking enquiries through WhatsApp integration. The resulting website combines luxury presentation with practical conversion-focused design.",
    designApproach: "Nexus Grand required a modern, mobile-first approach to hospitality. The design emphasizes speed and ease of use, with a layout that guides users directly to the room offerings. We used a contemporary color palette and dynamic interactions to appeal to a tech-savvy demographic, ensuring the premium nature of the hotel is reflected in every interaction.",
    technicalBuild: "Leveraging Next.js and specialized mobile optimizations, we created a highly flexible content workflow. A key technical feature is the seamless integration of WhatsApp for direct booking inquiries, reducing friction and increasing conversion rates. The build also includes a custom room-filtering system to help guests find their ideal accommodation quickly.",
    result: "WhatsApp booking live — Deluxe ₦120k, Executive ₦250k, Presidential ₦450k rooms",
    deliverables: [
      "Mobile-First Hospitality Design",
      "WhatsApp Booking Integration",
      "Dynamic Room Listings",
      "Local SEO Optimization",
      "Fast-Loading Image Galleries",
      "Simplified Customer Journey"
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    package: "Boutique",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format&fit=crop"
    ]
  },
];
