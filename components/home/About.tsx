"use client";

import { motion } from "framer-motion";
import { SITE_CONSTANTS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const CREDENTIALS = [
  "CAC Registered Business",
  "Next.js & React Stack",
  "WhatsApp-First Process",
  "50% Deposit, 50% on Delivery",
];

export default function About() {
  return (
    <section className={`${SITE_CONSTANTS.sectionSpacing} bg-bg border-t border-border`}>
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column: Headline */}
          <motion.div variants={fadeUp} className="space-y-6">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-text-muted block">
              About the Studio
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              A Digital Studio<br />
              Built for the<br />
              <span className="text-accent">African Market.</span>
            </h2>
          </motion.div>

          {/* Right Column: Copy & Credentials */}
          <div className="space-y-12">
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="font-sans text-lg md:text-xl text-text leading-relaxed">
                A3 Synergy was built with one insight: most Nigerian businesses are losing customers every day to competitors who simply have a better website.
              </p>
              <p className="font-sans text-text-warm leading-relaxed italic border-l-2 border-accent pl-6 py-2">
                We fix that.
              </p>
              <p className="font-sans text-text-warm leading-relaxed">
                We build fast, mobile-first, results-driven websites and we deliver them in 7 to 14 days — not months. Every project is backed by our CAC registration, transparent pricing, and ongoing support after launch.
              </p>
            </motion.div>

            {/* Credential List */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CREDENTIALS.map((item, index) => (
                <motion.div key={index} variants={fadeUp} className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-accent flex-shrink-0" />
                  <span className="font-sans text-xs uppercase tracking-widest text-text font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
