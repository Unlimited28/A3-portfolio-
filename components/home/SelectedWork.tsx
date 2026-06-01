"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONSTANTS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const PROJECTS = [
  {
    id: 1,
    title: "The Grand Heritage",
    industry: "Luxury Hospitality",
    description: "A digital experience for a 5-star hotel in Lagos, focusing on seamless booking and visual storytelling.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    results: "45% Increase in Direct Bookings",
    link: "/work/grand-heritage",
  },
  {
    id: 2,
    title: "Apex Tower",
    industry: "Corporate Real Estate",
    description: "An editorial-grade portfolio for a prime commercial development, showcasing premium office spaces.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    results: "80% Lead Capture Rate",
    link: "/work/apex-tower",
  },
  {
    id: 3,
    title: "Royal Palms Resort",
    industry: "Luxury Hospitality",
    description: "A mobile-first platform for an exclusive coastal resort, integrating real-time availability and guest services.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    results: "2x Higher Mobile Conversion",
    link: "/work/royal-palms",
  },
];

const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => (
  <motion.div
    variants={fadeUp}
    whileHover="hover"
    className="group"
  >
    <Link href={project.link} className="block space-y-6">
      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden border border-border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-bg/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="space-y-4 px-1">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block">
              {project.industry}
            </span>
            <h3 className="font-display text-3xl font-bold text-text group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <div className="mt-2 text-text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
            <ArrowUpRight size={24} />
          </div>
        </div>

        <p className="font-sans text-text-warm text-sm leading-relaxed max-w-sm">
          {project.description}
        </p>

        {/* Results Box */}
        <div className="border border-border p-4 bg-surface/30 inline-block w-full">
          <span className="font-sans text-[10px] uppercase tracking-widest text-text-muted block mb-1">Impact</span>
          <p className="font-display text-lg font-semibold text-text">{project.results}</p>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function SelectedWork() {
  return (
    <section className={`${SITE_CONSTANTS.sectionSpacing} bg-bg`}>
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-text-muted block">
              Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Three Projects.<br />
              Three Industries.<br />
              One Standard.
            </h2>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View All CTA */}
          <div className="pt-8 flex justify-center">
            <Link
              href="/work"
              className="group flex items-center gap-4 font-sans font-bold text-sm uppercase tracking-widest text-text"
            >
              View Full Portfolio
              <div className="w-12 h-[1px] bg-accent transition-all duration-300 group-hover:w-20" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
