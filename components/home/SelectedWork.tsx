"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE_CONSTANTS } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function SelectedWork() {
  // Take the first 3 projects from the centralized data source
  const selectedProjects = PROJECTS.slice(0, 3);

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
            {selectedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
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
