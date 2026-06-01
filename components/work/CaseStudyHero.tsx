"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SITE_CONSTANTS } from "@/lib/constants";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-bg">
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          {/* Text Content */}
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <motion.span
                variants={fadeUp}
                className="font-sans text-xs uppercase tracking-[0.3em] text-accent block"
              >
                {project.industry}
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight"
              >
                {project.title}
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUp}
              className="font-sans text-text-warm text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Project Image */}
          <motion.div
            variants={fadeUp}
            className="relative aspect-[21/9] w-full overflow-hidden border border-border"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
          </motion.div>

          {/* Project Meta */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border"
          >
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-text-muted block mb-2">Service</span>
              <p className="font-sans text-sm text-text">{project.package} Package</p>
            </div>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-text-muted block mb-2">Date</span>
              <p className="font-sans text-sm text-text">2024</p>
            </div>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-text-muted block mb-2">Platform</span>
              <p className="font-sans text-sm text-text">Web Experience</p>
            </div>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-text-muted block mb-2">Location</span>
              <p className="font-sans text-sm text-text">Nigeria</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
