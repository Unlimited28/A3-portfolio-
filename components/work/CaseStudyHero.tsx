"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SITE_CONSTANTS } from "@/lib/constants";
import Link from "next/link";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden bg-bg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </div>

      {/* Content */}
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6 h-full relative z-10`}>
        <div className="flex flex-col justify-end h-full pb-12 md:pb-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl space-y-6"
          >
            <div className="space-y-4">
              <motion.span
                variants={fadeUp}
                className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-accent block"
              >
                {project.industry}
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-text"
              >
                {project.title}
              </motion.h1>
            </div>

            <motion.div variants={fadeUp}>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:text-accent-soft transition-colors font-sans text-sm md:text-base tracking-wider group"
              >
                View Live Site
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
