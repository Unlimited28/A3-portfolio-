"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE_CONSTANTS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const NoiseBackground = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03] contrast-150 brightness-100 z-0">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

const CredentialCard = ({ title, description }: { title: string, description: string }) => (
  <div className="border border-border p-6 bg-surface/50 backdrop-blur-sm">
    <h3 className="font-display text-accent text-xl font-bold mb-1 uppercase tracking-tight">{title}</h3>
    <p className="font-sans text-text-warm text-sm leading-relaxed">{description}</p>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <NoiseBackground />

      {/* Horizontal Gold Line */}
      <div className={`absolute top-1/4 left-0 right-0 z-10 hidden lg:block`}>
        <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
          <div className="h-[1px] w-full bg-accent opacity-30" />
        </div>
      </div>

      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6 relative z-20 w-full`}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={fadeUp} className="space-y-6">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                We Build Websites<br />
                That Work for<br />
                <span className="text-accent">African</span> Business.
              </h1>
              <div className="max-w-xl space-y-4">
                <p className="font-sans text-lg md:text-xl text-text-warm leading-relaxed">
                  A3 Synergy is a CAC-registered Nigerian digital studio.
                </p>
                <p className="font-sans text-lg md:text-xl text-text-warm leading-relaxed">
                  We deliver high-converting, mobile-first websites for businesses across Nigeria and Africa — in 7 to 14 days.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Link
                href="/work"
                className="bg-accent text-bg px-8 py-4 font-sans font-bold text-sm uppercase tracking-widest transition-all hover:bg-accent-soft"
              >
                View Our Work
              </Link>

              <Link
                href="/contact"
                className="group relative font-sans font-bold text-sm uppercase tracking-widest text-text"
              >
                Get a Free Quote &rarr;
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Credentials */}
          <div className="lg:col-span-5">
            <motion.div
              variants={staggerContainer}
              className="flex flex-col gap-4 lg:pl-12"
            >
              <motion.div variants={fadeUp}>
                <CredentialCard
                  title="CAC Registered"
                  description="Fully registered Nigerian business"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <CredentialCard
                  title="7–14 Days"
                  description="Average website delivery time"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <CredentialCard
                  title="Mobile-First"
                  description="Every project built for smartphones first"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="h-6 w-[1px] bg-accent/20 overflow-hidden">
          <motion.div
            animate={{
              height: ["0px", "24px", "0px"],
              y: [0, 0, 24]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full bg-accent"
          />
        </div>
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-text-muted">Scroll</span>
      </div>
    </section>
  );
}
