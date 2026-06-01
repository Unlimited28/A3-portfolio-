"use client";

import { motion } from "framer-motion";
import { SITE_CONSTANTS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const SERVICES = [
  {
    name: "Business Website Design",
    description: "Custom, mobile-first sites built to convert visitors to paying customers.",
    tag: "Core",
  },
  {
    name: "Landing Pages",
    description: "High-converting single pages for product launches, campaigns, or lead capture.",
    tag: "Core",
  },
  {
    name: "Website Redesign",
    description: "Modernising outdated sites — faster, mobile-first, built for results.",
    tag: "Core",
  },
  {
    name: "E-Commerce Stores",
    description: "Online shops with Paystack and Flutterwave payment integration.",
    tag: "Growth",
  },
  {
    name: "Booking & Appointment Systems",
    description: "Online scheduling for hotels, salons, clinics, tutors, and service businesses.",
    tag: "Growth",
  },
  {
    name: "SEO & Google Business Setup",
    description: "Get found on Google — meta tags, speed, indexing, and Google Business Profile.",
    tag: "Core",
  },
  {
    name: "Monthly Maintenance",
    description: "Updates, backups, security monitoring, and content edits on retainer.",
    tag: "Recurring",
  },
  {
    name: "Brand Identity & Logo Design",
    description: "Logo, colour palette, and brand guidelines for a cohesive professional presence.",
    tag: "Growth",
  },
];

const ServiceCard = ({ service }: { service: typeof SERVICES[0] }) => (
  <motion.div
    variants={fadeUp}
    className="border border-border p-8 bg-surface-alt/30 hover:bg-surface-alt/50 transition-colors duration-300 flex flex-col justify-between h-full group"
  >
    <div className="space-y-4">
      <span className={`inline-block px-3 py-1 text-[10px] uppercase tracking-widest border border-accent/30 text-accent font-medium mb-4`}>
        {service.tag}
      </span>
      <h3 className="font-display text-2xl font-bold text-text group-hover:text-accent transition-colors duration-300">
        {service.name}
      </h3>
      <p className="font-sans text-sm text-text-warm leading-relaxed">
        {service.description}
      </p>
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <section className={`${SITE_CONSTANTS.sectionSpacing} bg-surface border-y border-border`}>
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-text-muted block mb-4">
              Our Expertise
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Everything Your Business Needs Online.
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
