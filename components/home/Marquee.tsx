"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "Web Design",
  "E-Commerce",
  "SEO Setup",
  "Booking Systems",
  "Brand Identity",
  "Next.js",
  "React",
  "Nigeria",
  "Africa",
  "7-Day Delivery",
  "CAC Registered",
  "Landing Pages",
];

export default function Marquee() {
  // Triple the items to ensure seamless loop
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="border-y border-border bg-bg overflow-hidden py-6 md:py-8 relative">
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {displayItems.map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="font-display text-xl md:text-2xl font-semibold uppercase tracking-widest text-text">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-accent opacity-50" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
