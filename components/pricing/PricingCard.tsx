"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PricingPackage } from "@/lib/pricing";
import { fadeUp } from "@/lib/animations";
import { Check } from "lucide-react";

export default function PricingCard({ pkg, index }: { pkg: PricingPackage; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={`relative p-8 md:p-10 flex flex-col h-full transition-all duration-500 ${
        pkg.isFeatured
          ? "bg-surface-alt border-2 border-accent shadow-[0_0_40px_rgba(184,151,90,0.1)] scale-[1.02] z-10"
          : "bg-surface border border-border hover:border-border-accent/50"
      }`}
    >
      {pkg.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-bg px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
          {pkg.badge}
        </div>
      )}

      <div className="mb-8">
        <h3 className="font-display text-2xl font-bold mb-2">{pkg.name}</h3>
        <div className="font-sans text-xl md:text-2xl font-bold text-accent">
          {pkg.price}
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 font-sans text-sm text-text-warm">
            <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`w-full py-4 text-center font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
          pkg.isFeatured
            ? "bg-accent text-bg hover:bg-accent-soft"
            : "border border-accent text-accent hover:bg-accent hover:text-bg"
        }`}
      >
        Get Started
      </Link>

      {/* Decorative noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('/noise.svg')]" />
    </motion.div>
  );
}
