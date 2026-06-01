"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONSTANTS } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

const CATEGORIES = ["All", "Hospitality", "Corporate"] as const;
type Category = (typeof CATEGORIES)[number];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.industry === activeCategory;
  });

  return (
    <section className={`${SITE_CONSTANTS.largeSectionSpacing} pt-32 min-h-screen`}>
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-12 mb-20"
        >
          <div className="max-w-2xl space-y-6">
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-7xl font-bold"
            >
              The Portfolio
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-sans text-text-warm text-lg leading-relaxed"
            >
              A selection of our most impactful work across the hospitality and corporate sectors in Nigeria.
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 border-b border-border pb-8"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-sans text-xs uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-accent text-bg border-accent"
                    : "bg-transparent text-text-muted border-border hover:border-accent/50 hover:text-text"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-sans text-text-muted">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
