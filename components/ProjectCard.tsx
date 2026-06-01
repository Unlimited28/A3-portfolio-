"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, cardHover } from "@/lib/animations";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover="hover"
      className="group"
    >
      <Link href={`/work/${project.slug}`} className="block space-y-6">
        {/* Image Area */}
        <motion.div
          variants={cardHover}
          className="relative aspect-[4/3] overflow-hidden border border-border"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-bg/20 group-hover:bg-transparent transition-colors duration-500" />
        </motion.div>

        {/* Content */}
        <div className="space-y-4 px-1">
          <div className="space-y-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent block">
              {project.industry}
            </span>
            <h3 className="font-display text-3xl font-bold text-text group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <p className="font-sans text-text-warm text-sm leading-relaxed max-w-sm">
            {project.description}
          </p>

          {/* Result Box */}
          <div className="border border-accent/30 p-4 bg-accent-dim inline-block w-full">
            <span className="font-sans text-[10px] uppercase tracking-widest text-accent block mb-1">Impact</span>
            <p className="font-sans text-sm text-text-warm leading-snug">{project.result}</p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text group-hover:text-accent transition-colors duration-300">
            View Case Study
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
