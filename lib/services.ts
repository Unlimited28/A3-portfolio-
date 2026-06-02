export interface Service {
  id: string;
  title: string;
  category: "Core" | "Growth" | "Recurring";
  description: string;
  cta: string;
}

export const SERVICES: Service[] = [
  {
    id: "business-website-design",
    title: "Business Website Design",
    category: "Core",
    description: "Custom business websites designed to build credibility, generate enquiries, and convert visitors into customers.",
    cta: "Start Your Project →",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    category: "Core",
    description: "High-converting landing pages for product launches, lead generation campaigns, and marketing promotions.",
    cta: "Get Started →",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    category: "Core",
    description: "Transform outdated websites into modern, mobile-first digital experiences.",
    cta: "Request Redesign →",
  },
  {
    id: "e-commerce-stores",
    title: "E-Commerce Stores",
    category: "Growth",
    description: "Online stores with payment integration, product management, and customer-friendly checkout experiences.",
    cta: "Launch Your Store →",
  },
  {
    id: "booking-systems",
    title: "Booking Systems",
    category: "Growth",
    description: "Appointment, reservation, and booking systems for hotels, clinics, consultants, and service businesses.",
    cta: "Book a Consultation →",
  },
  {
    id: "seo-setup",
    title: "SEO Setup",
    category: "Growth",
    description: "Technical SEO, Google indexing, metadata optimization, and local business visibility improvements.",
    cta: "Improve Visibility →",
  },
  {
    id: "monthly-maintenance",
    title: "Monthly Maintenance",
    category: "Recurring",
    description: "Ongoing updates, monitoring, backups, and support to keep your website secure and performing well.",
    cta: "Learn More →",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    category: "Growth",
    description: "Logo design, brand guidelines, colour systems, and visual identity development.",
    cta: "Build Your Brand →",
  },
];
