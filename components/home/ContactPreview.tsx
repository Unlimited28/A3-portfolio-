"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONSTANTS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ContactPreview() {
  return (
    <section className={`${SITE_CONSTANTS.sectionSpacing} bg-surface-alt border-t border-border relative overflow-hidden`}>
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6 relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-accent block">
                Get Started
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Let&apos;s Build Something That Works.
              </h2>
            </div>

            <div className="space-y-6">
              {[
                "CAC Registered Nigerian Business",
                "Response within 24 hours",
                "50% deposit structure",
              ].map((item, index) => (
                <motion.div key={index} variants={fadeUp} className="flex items-center gap-4">
                  <div className="w-6 h-[1px] bg-accent/50" />
                  <span className="font-sans text-sm text-text-warm uppercase tracking-widest">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Area */}
          <motion.div
            variants={fadeUp}
            className="lg:flex lg:justify-end"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-accent text-bg px-10 py-6 font-sans font-bold text-sm uppercase tracking-[0.2em] transition-all hover:bg-accent-soft group"
            >
              Start Your Project
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
    </section>
  );
}
