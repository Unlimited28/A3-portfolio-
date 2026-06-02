"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Service } from "@/lib/services";
import { fadeUp } from "@/lib/animations";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="group relative bg-surface border border-border p-8 md:p-10 transition-colors duration-300 hover:border-accent/50"
    >
      <div className="flex flex-col h-full">
        <span className="font-sans text-[10px] tracking-[0.2em] text-accent uppercase mb-6">
          {service.category}
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>
        <p className="font-sans text-text-warm leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>
        <Link
          href="/contact"
          className="font-sans text-xs tracking-widest uppercase text-text hover:text-accent transition-colors duration-300 flex items-center gap-2"
        >
          {service.cta}
        </Link>
      </div>

      {/* Decorative noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('/noise.svg')]" />
    </motion.div>
  );
}
