"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SITE_CONSTANTS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const PACKAGES = [
  {
    name: "Starter",
    price: "₦150,000 – ₦250,000",
    features: [
      "3 Pages",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO",
      "Google Maps",
      "WhatsApp Button",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "₦300,000 – ₦600,000",
    badge: "Most Popular",
    features: [
      "Up To 7 Pages",
      "Blog",
      "Social Media Links",
      "Google Analytics",
      "1 Month Support",
      "Everything In Starter",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "₦700,000 – ₦1,500,000",
    features: [
      "Custom Design",
      "E-Commerce Or Booking System",
      "Advanced SEO",
      "Performance Optimisation",
      "3 Months Support",
      "Everything In Business",
    ],
    featured: false,
  },
  {
    name: "Maintenance",
    price: "₦30,000 – ₦80,000 / Month",
    features: [
      "Monthly Content Updates",
      "Security Monitoring",
      "Daily Backups",
      "Performance Checks",
      "Priority WhatsApp Support",
    ],
    featured: false,
  },
];

const PricingCard = ({ pkg }: { pkg: typeof PACKAGES[0] }) => (
  <motion.div
    variants={fadeUp}
    className={`relative border ${pkg.featured ? 'border-accent' : 'border-border'} p-8 bg-surface-alt/40 flex flex-col h-full`}
  >
    {pkg.badge && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-bg px-4 py-1 text-[10px] uppercase tracking-widest font-bold">
        {pkg.badge}
      </div>
    )}

    <div className="mb-8">
      <h3 className="font-display text-2xl font-bold text-text mb-4 uppercase tracking-tight">{pkg.name}</h3>
      <p className="font-display text-xl font-semibold text-accent leading-none">{pkg.price}</p>
    </div>

    <ul className="space-y-4 mb-12 flex-grow">
      {pkg.features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
          <span className="font-sans text-sm text-text-warm leading-tight">{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-4 font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all ${pkg.featured ? 'bg-accent text-bg hover:bg-accent-soft' : 'border border-accent text-accent hover:bg-accent hover:text-bg'}`}>
      Choose {pkg.name}
    </button>
  </motion.div>
);

export default function Pricing() {
  return (
    <section className={`${SITE_CONSTANTS.sectionSpacing} bg-bg`}>
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-text-muted block">
              Investment
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight text-balance">
              Simple Packages. No Hidden Fees.
            </h2>
            <p className="font-sans text-text-warm text-lg md:text-xl">
              50% deposit to start. 50% on delivery.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
